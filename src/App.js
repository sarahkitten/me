import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Blog from './components/blog'
import Projects from './components/projects'
import PDFModal from './components/PDFModal'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPDFModalOpen: false,
      currentPDF: '',
      currentPDFTitle: ''
    };
  }

  openPDFModal = (pdfUrl, title) => {
    this.setState({
      isPDFModalOpen: true,
      currentPDF: pdfUrl,
      currentPDFTitle: title
    });
  }

  closePDFModal = () => {
    this.setState({
      isPDFModalOpen: false,
      currentPDF: '',
      currentPDFTitle: ''
    });
  }

  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar openPDFModal={this.openPDFModal}></Sidebar>
				<div id="colorlib-main">
					<Introduction openPDFModal={this.openPDFModal}></Introduction>
          <Projects></Projects>
					{/* <About></About> */}
          <Timeline openPDFModal={this.openPDFModal}></Timeline>
          <Blog openPDFModal={this.openPDFModal}></Blog>
          	</div>
      	</div>
        <PDFModal 
          isOpen={this.state.isPDFModalOpen}
          onClose={this.closePDFModal}
          pdfUrl={this.state.currentPDF}
          title={this.state.currentPDFTitle}
        />
      </div>
    );
  }
}

export default App;
