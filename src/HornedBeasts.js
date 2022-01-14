import React from 'react';
import Card from 'react-bootstrap/Card';

import './HornedBeasts.css'
class HornedBeasts extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    });
    this.props.handleShow(this.props.animal);
  }
  render(){
    return(
      <Card style={{width: '25%'}} className="cardClass">
        <Card.Img
          onClick={this.handleLikes}
          src={this.props.animal.image_url}
          alt={this.props.animal.title}
          title={this.props.animal.title}
          horns={this.props.animal.horns}
          />
        <Card.Header>{this.props.animal.title}</Card.Header>
        <Card.Text>{this.props.animal.description} </Card.Text>
        <Card.Text>💖: {this.state.likes}</Card.Text>
      </Card>
    ) 
  }
}

export default HornedBeasts;
