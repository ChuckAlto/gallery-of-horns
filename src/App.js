import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from './data.json'
import Modal from 'react-bootstrap/Modal'

import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show: false,
      animal:{title: 'some beast'},
      // title: this.props.animal.title
    }
  }

  handleShow = (animal) => {
    this.setState({
      show: true,
      animal
    })
  }
  handleClose = () => {
    this.setState ({
      show:false
    })
  }
  
  render(){
    return(
      <>
        <Header />

        <Modal 
          show={this.state.show} 
          onHide={this.handleClose}
          centered
          size="xl"
          >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.animal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img 
            src={this.state.animal.image_url}
            className="w-100" 
            alt={this.state.animal.title}
            />
            {this.state.animal.description}
          </Modal.Body>
        </Modal>

        <Main data={data} handleShow={this.handleShow}/>
        <Footer />
      </>
    )
  }
}

export default App;
