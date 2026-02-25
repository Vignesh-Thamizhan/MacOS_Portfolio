import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { Download } from "lucide-react";
import { useState } from "react";

// Set up PDF.js worker for Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).href;

import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper.jsx";

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setIsLoading(false);
    };

    const onDocumentLoadError = (err) => {
        console.error('PDF load error:', err);
        setError(err.message || "Failed to load PDF");
        setIsLoading(false);
    };

    return <>
        <div id="window-header">
            <WindowControls target="resume" />
            <h2>Resume.pdf</h2>
            <a href="files/resume.pdf" 
               download className="cursor-pointer"
               title="download resume">
                <Download className="icon" />
            </a>
        </div>

        <div style={{ height: 'calc(100% - 60px)', overflow: 'auto', padding: '10px', backgroundColor: '#f5f5f5' }}>
            {isLoading && <p style={{ textAlign: 'center', color: '#666' }}>Loading PDF...</p>}
            {error && <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>}
            {!error && (
                <Document 
                    file="/files/resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading="Loading..."
                >
                    <Page pageNumber={1} width={400} />
                </Document>
            )}
        </div>

    </>
}

const ResumeWindow = WindowWrapper(Resume, 'resume');

export default ResumeWindow;