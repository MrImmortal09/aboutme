'use client';
import { useEffect, useRef, useState } from 'react';
import * as PDFJS from 'pdfjs-dist';

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [numPages, setNumPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const renderPage = async (pageNum: number, pdfDoc: PDFJS.PDFDocumentProxy) => {
    const page = await pdfDoc.getPage(pageNum);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const viewport = page.getViewport({ scale: 1.5 });
    const context = canvas.getContext('2d');
    
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({
      canvasContext: context!,
      viewport: viewport
    }).promise;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set worker source
    PDFJS.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

    // Load and render PDF
    PDFJS.getDocument('/resume.pdf').promise.then(pdf => {
      setNumPages(pdf.numPages);
      renderPage(currentPage, pdf);
    });
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-4">
      {/* Navigation controls */}
      <div className="fixed top-4 flex gap-4 bg-pdf-controls-bg p-2 rounded-lg shadow-md">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage <= 1}
          className="px-4 py-2 bg-pdf-controls-button text-pdf-controls-bg rounded disabled:bg-pdf-controls-button-disabled disabled:text-pdf-controls-text"
        >
          Previous
        </button>
        <span className="flex items-center text-pdf-controls-text">
          Page {currentPage} of {numPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, numPages))}
          disabled={currentPage >= numPages}
          className="px-4 py-2 bg-pdf-controls-button text-pdf-controls-bg rounded disabled:bg-pdf-controls-button-disabled disabled:text-pdf-controls-text"
        >
          Next
        </button>
      </div>

      {/* PDF Container */}
      <div className="mt-16 overflow-auto max-h-pdf-container p-4 bg-pdf-controls-bg rounded-lg shadow-lg">
        <canvas ref={canvasRef} className="mx-auto" />
      </div>
    </div>
  );
};

export default App;