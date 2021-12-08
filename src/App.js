import React, { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state ={
      monsters: [],
      searchField:''
    };
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({ monsters: users }));
  }
  

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render(){

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster =>                 // To Filter the State
    monster.name.toLowerCase().includes(searchField.toLowerCase()) )

    return (
      <div className="App"> 
        <h1 className="header"> Monsters Rolodex </h1>
      <SearchBox
        placeholder ='search monsters'
        handleChange ={this.onSearchChange} 
      />

      <CardList monsters={filteredMonsters}/>

       </div>
    );
  }
}

export default App;



