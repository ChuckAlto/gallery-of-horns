import React from 'react';
import Modal from 'react-bootstrap/Modal'


class SelectedBeast extends React.Component{
  render(){
    return(
      <Modal 
          show={this.props.show} 
          onHide={this.props.handleClose}
          centered
          size="xl"
          >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.animal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img 
            src={this.props.animal.image_url}
            className="w-100" 
            alt={this.props.animal.title}
            />
            {this.props.animal.description}
          </Modal.Body>
        </Modal>
    )
  }
};


export default SelectedBeast;
