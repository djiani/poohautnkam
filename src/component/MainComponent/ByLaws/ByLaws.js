import React, { Component } from "react";
import { Document, Page, pdfjs} from "react-pdf";
import './ByLaws.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;




export default class ByLaws extends Component {
  constructor(props){
    super(props);
    this.state = { numPages: null, pageNumber: 1 };
  }
  
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>{
    
    this.setState(state => ({ pageNumber: state.pageNumber > 1? state.pageNumber - 1:0 }));
    
  }
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber < state.numPages? state.pageNumber + 1: state.numPages }));


  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <nav>
          <button onClick={console.log()}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <div >
          <Document
            file="/byLaws/poohautnkambalaws.pdf"
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
