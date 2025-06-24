import React, { Component } from 'react'

export default class PDFModal extends Component {
  render() {
    const { isOpen, onClose, pdfUrl, title } = this.props;
    
    if (!isOpen) return null;

    return (
      <div className="pdf-modal-overlay" onClick={onClose}>
        <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="pdf-modal-header">
            <h3>{title}</h3>
            <button className="pdf-modal-close" onClick={onClose}>
              <i className="icon-close"></i>
            </button>
          </div>
          <div className="pdf-modal-body">
            <iframe
              src={pdfUrl}
              width="100%"
              height="100%"
              title={title}
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
            />
          </div>
          <div className="pdf-modal-footer">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Open in New Tab
            </a>
            <button className="btn btn-default" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
}
