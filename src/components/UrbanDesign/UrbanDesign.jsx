import React, { useState } from 'react';
import './UrbanDesign.css';
import samplePDF from '../../Brock Portfolio - Masters.pdf'
import samplePDF2 from '../../Brock Portfolio - Masters - pages.pdf'
import { Document, Page, pdfjs } from "react-pdf";
import { BrowserView, MobileView } from 'react-device-detect';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function UrbanDesign(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(2);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
  
    function previousPage() {
      changePage(-1);
    }
  
    function nextPage() {
      changePage(1);
    }
  
    const { pdf } = props;

    return (
      <div className='UrbanDesignContainer'>
        <div className="compv">
        <BrowserView>
        <Document file={samplePDF}
          onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber}
          className='Portfolio'/>
        </Document>
        </BrowserView>

        <MobileView>
        <Document file={samplePDF2}
          onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber}
          className='Portfolio'/>
        </Document>
        </MobileView>
        </div>

        <div className='Navigation'>
          <br/>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
      

      

  
    );
  }

export default UrbanDesign