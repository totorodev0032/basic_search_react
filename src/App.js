import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/Card-list/Card-list.component';
import {SearchBox} from './components/search-box/searchbox.component';

class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
      monsters:[],
      searchmonster: ""
    }
  }

  hanleChange = e => {
    this.setState({searchmonster : e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( users => this.setState({monsters:users}));
  }

  
  render(){
    const {monsters, searchmonster} = this.state;
    const filteredmonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchmonster.toLowerCase()));
    return (
      <div className="App">
        <input className = "search" type = "search" placeholder = "search monster" onChange ={
          e => this.setState({searchmonster: e.target.value})
          }/>
          {/* <SearchBox
            placeholder = "search monster"
            handleChange = {this.hanleChange}
          /> */}
        <CardList monsters = {filteredmonsters}/>
      </div>
    );
  }
}

export default App;
