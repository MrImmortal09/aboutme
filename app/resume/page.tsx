'use client';
import { useEffect, useRef, useState } from 'react';
import * as PDFJS from 'pdfjs-dist';

const PDFViewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const calculateScale = (pageWidth: number) => {
    if (!containerRef.current) return 1;
    const containerWidth = containerRef.current.clientWidth - 32; 
    return containerWidth / pageWidth;
  };

  const renderPage = async (pageNum: number, pdfDoc: PDFJS.PDFDocumentProxy) => {
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
  };

  const handleResize = () => {

    PDFJS.getDocument('/resume.pdf').promise.then(pdf => {
      renderPage(currentPage, pdf);
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    PDFJS.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

  
    PDFJS.getDocument('/resume.pdf').promise.then(pdf => {
      setNumPages(pdf.numPages);
      renderPage(currentPage, pdf);
    });

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-4">

      <div className="sticky top-4 z-10 w-full max-w-md mx-auto flex justify-center gap-2 bg-pdf-controls-bg p-2 rounded-lg shadow-md">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage <= 1}
          className="px-3 py-1 bg-pdf-controls-button text-pdf-controls-bg rounded disabled:bg-pdf-controls-button-disabled disabled:text-pdf-controls-text text-sm"
        >
          Previous
        </button>
        <span className="flex items-center text-pdf-controls-text text-sm whitespace-nowrap">
          Page {currentPage} of {numPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, numPages))}
          disabled={currentPage >= numPages}
          className="px-3 py-1 bg-pdf-controls-button text-pdf-controls-bg rounded disabled:bg-pdf-controls-button-disabled disabled:text-pdf-controls-text text-sm"
        >
          Next
        </button>
      </div>

      <div 
        ref={containerRef}
        className="mt-4 w-full overflow-auto bg-pdf-controls-bg rounded-lg shadow-lg"
      >
        <div className="p-4 min-w-0">
          <canvas ref={canvasRef} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;