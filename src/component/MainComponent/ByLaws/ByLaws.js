import React, { Component } from "react";
import { Document, Page, pdfjs} from "react-pdf";
import {ButtonToolbar,ButtonGroup,Button } from 'react-bootstrap';
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
    console.log("test passed");
    this.setState(state => ({ pageNumber: state.pageNumber > 1? state.pageNumber - 1:1 }));
    
  }
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber < state.numPages? state.pageNumber + 1: state.numPages }));


  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="DocBlock p-2">
     
        <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
          <ButtonGroup aria-label="First group" className="btn-group-sm">
            <Button variant="light" onClick={this.goToPrevPage}>Prev</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="First group" className="btn-group-sm">
            <Button variant="light" onClick={this.goToNextPage}>Next</Button>
          </ButtonGroup>
    
        </ButtonToolbar>

        <div className="DocumentPage mt-2">
          <Document
            file="/byLaws/poohautnkambalaws.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
            className="docFile" 
          >
            <Page pageNumber={pageNumber}  className="pagepdf" />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>

        <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
          <ButtonGroup aria-label="First group" className="btn-group-sm">
            <Button variant="light" className="" onClick={this.goToPrevPage}>Prev</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="First group" className="btn-group-sm">
            <Button variant="light" onClick={this.goToNextPage}>Next</Button>
          </ButtonGroup>
    
        </ButtonToolbar>
      </div>
    );
  }
}
