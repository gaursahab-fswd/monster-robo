
import { render } from '@testing-library/react';
import React, { Component } from 'react'


class App extends Component() {
 
  constructor(){
    super();
     this.state={
       monsters : []
     };
  }
  

  componentDidMount(){
      try {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    
    .then(users =() => {
      console.log(response); 
      this.setState({monsters:users}));
    }
    
} catch(err){

  console.log(err);
  
}
  }
  render(){
    return(
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
