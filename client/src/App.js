import React from 'react';
import axios from 'axios';
import List from './components/List';
import Navbar from './components/Navbar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response);
      this.setState({
        data:  response.data
      });
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <div className='nav'>
          <Navbar />
        </div>
        <div>
          <h1>Google Search Trends For Women's World Cup Athletes - Jun-Jul 2019</h1>
          <List data={this.state.data}/>
        </div>  
      </div>
    );
  }
}

export default App;
