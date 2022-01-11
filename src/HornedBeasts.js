import React from 'react';

class HornedBeasts extends React.Component{
  render(){
    return(
      <article>
        <img 
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.title}
          />
        <h2>{this.props.title}</h2>
        <p>{this.props.description} </p>
      </article>
    ) 
  }
}

export default HornedBeasts;
