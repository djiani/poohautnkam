import React, { Component } from "react";
import { Document, Page, pdfjs} from "react-pdf";
import './MainStyle.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




export default class ByLaws extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber > 1? state.pageNumber - 1:0 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber < state.numPages? state.pageNumber + 1: state.numPages }));


  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <div style={{ width: "100%" }}>
          <Document
            file="/byLaws/book.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
            className="docFile"
          >
            <Page pageNumber={pageNumber}  className="pagepdf" />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}
