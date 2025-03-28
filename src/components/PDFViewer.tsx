import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Download, X } from 'lucide-react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
  onClose: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const handleDownload = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-4xl mx-4 bg-background rounded-lg shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Resume</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleDownload} className="gap-2">
              <Download size={16} />
              Download
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="p-4">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex flex-col items-center"
            loading={
              <div className="flex items-center justify-center h-[800px]">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            }
          >
            <div className="flex items-center gap-4 mb-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPageNumber(page => Math.max(1, page - 1))}
                disabled={pageNumber <= 1}
              >
                <ChevronLeft size={20} />
              </Button>
              <span className="text-sm">
                Page {pageNumber} of {numPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPageNumber(page => Math.min(numPages || page, page + 1))}
                disabled={pageNumber >= (numPages || 1)}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
              >
                -
              </Button>
              <span className="text-sm">{Math.round(scale * 100)}%</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setScale(s => Math.min(2, s + 0.1))}
              >
                +
              </Button>
            </div>
            <Page
              pageNumber={pageNumber}
              scale={scale}
              className="shadow-lg"
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer; 