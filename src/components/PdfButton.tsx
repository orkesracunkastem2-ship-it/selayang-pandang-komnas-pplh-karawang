'use client';

import { useRef } from 'react';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface Props {
  title   : string;
  targetId?: string;        // id elemen yang ingin di-capture (default: body/main)
  filename?: string;        // nama file PDF
  btnLabel?: string;
}

export default function PdfButton({
  title,
  targetId = 'pdf-capture-root',
  filename,
  btnLabel = 'Download PDF',
}: Props) {
  const loadingRef = useRef(false);

  async function handlePdf() {
    if (loadingRef.current) return;
    loadingRef.current = true;

    try {
      // 1) Wrap target in a full-page capture container
      const target = document.getElementById(targetId);
      if (!target) { alert(`Elemen #${targetId} tidak ditemukan.`); return; }

      // Temporarily wrap the target in a full-width capture root
      const captureRoot = document.createElement('div');
      captureRoot.id = '__pdf_capture_wrap__';
      captureRoot.style.cssText = [
        'position:fixed', 'top:0', 'left:0', 'width:100vw', 'min-height:100vh',
        'z-index:99999', 'background:#0b1326', 'overflow-x:hidden',
        'padding:24px 16px 48px', 'box-sizing:border-box',
      ].join(';');
      const clone = target.cloneNode(true) as HTMLElement;
      clone.style.cssText = 'position:static;width:100%;box-sizing:border-box;';
      captureRoot.appendChild(clone);
      document.body.appendChild(captureRoot);

      // 2) Wait for images to settle
      await new Promise(r => setTimeout(r, 300));

      const canvas = await html2canvas(captureRoot, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#0b1326',
        width: Math.max(captureRoot.scrollWidth, window.innerWidth),
      });

      // 3) Build PDF
      const imgData  = canvas.toDataURL('image/png');
      const pdfW     = 210; // mm (A4)
      const pdfH     = Math.round((canvas.height * pdfW) / canvas.width);
      const pdf      = new jsPDF({ orientation: pdfH > pdfW ? 'portrait' : 'portrait', unit: 'mm', format: 'a4' });
      pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
      if (pdfH > 297) {
        // multi-page
        const pageCount = Math.ceil(pdfH / 297);
        for (let i = 1; i < pageCount; i++) {
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, -(297 * i), pdfW, pdfH);
        }
      }
      pdf.setProperties({ title, creator: 'Komnas PPLH Karawang — Selayang Pandang 2026' });
      pdf.save(filename || `${title.toLowerCase().replace(/\s+/g,'-')}.pdf`);

      // 4) Cleanup
      document.body.removeChild(captureRoot);
    } catch (err) {
      console.error('PDF generation failed:', err);
      alert('Gagal membuat PDF. Coba lagi ya.');
    } finally {
      loadingRef.current = false;
    }
  }

  return (
    <button
      onClick={handlePdf}
      disabled={loadingRef.current}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '8px 16px',
        background: 'var(--surface-2)',
        color: 'var(--on-surface)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'border-color 120ms, background 120ms',
      }}
      onMouseEnter={function (e: any) {
        e.currentTarget.style.borderColor  = 'var(--border-focus)';
        e.currentTarget.style.background    = 'var(--surface-1)';
      }}
      onMouseLeave={function (e: any) {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.background  = 'var(--surface-2)';
      }}
    >
      <Download size={15} />
      {btnLabel}
    </button>
  );
}
