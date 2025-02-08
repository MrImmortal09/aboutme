'use client';
import { useEffect } from 'react';

const PDFViewer: React.FC = () => {
  useEffect(() => {
    window.location.href = '/resume.pdf';
  }, []);

  return null;
};

export default PDFViewer;
