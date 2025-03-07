//// filepath: /home/oms/Coding/opensource/aboutme/app/resume/page.tsx
'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import * as PDFJS from 'pdfjs-dist';

const PDFViewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const calculateScale = useCallback((pageWidth: number) => {
    if (!containerRef.current) return 1;
    const containerWidth = containerRef.current.clientWidth - 32; 
    return containerWidth / pageWidth;
  }, []);

  const renderPage = useCallback(async (pageNum: number, pdfDoc: PDFJS.PDFDocumentProxy) => {
    const page = await pdfDoc.getPage(pageNum);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const initialViewport = page.getViewport({ scale: 1 });
    const newScale = calculateScale(initialViewport.width);
    const viewport = page.getViewport({ scale: newScale });
    const context = canvas.getContext('2d');

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({
      canvasContext: context!,
      viewport: viewport
    }).promise;
  }, [calculateScale]);

  const handleResize = useCallback(() => {
    PDFJS.getDocument('/resume.pdf').promise.then(pdf => {
      renderPage(currentPage, pdf);
    });
  }, [currentPage, renderPage]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    PDFJS.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;
    PDFJS.getDocument('/resume.pdf').promise.then(pdf => {
      setNumPages(pdf.numPages);
      renderPage(currentPage, pdf);
    });

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage, handleResize, renderPage]);

  return (
    <div className="flex flex-col items-center ...existing code...">
      <div>
        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous</button>
        <span>{currentPage} / {numPages}</span>
        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, numPages))}>Next</button>
      </div>
      ...existing code...
    </div>
  );
};

export default PDFViewer;