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
    })
  }
  render(){
    return(
      <Card style={{width: '25%'}} className="cardClass">
        <Card.Img
          onClick={this.handleLikes} 
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.title}
          />
        <Card.Header>{this.props.title}</Card.Header>
        <Card.Text>{this.props.description} </Card.Text>
        <Card.Text>💖: {this.state.likes}</Card.Text>
      </Card>
    ) 
  }
}

export default HornedBeasts;
