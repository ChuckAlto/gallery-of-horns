import React from 'react';

import HornedBeasts from './HornedBeasts.js';

import './Main.css';


class Main extends React.Component{
  render(){
    
    let hornedBeastsArray = this.props.data.map((animal, idx) => (
      <HornedBeasts
        key={idx} 
        imageUrl={animal.image_url}
        title={animal.title}
        description={animal.description}
        />
    ));


    return(
      <main>
        {hornedBeastsArray}
      </main>
        
          

    ) 
  }
}

export default Main;
