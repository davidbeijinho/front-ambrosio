import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: null,
      sensor: null,
    };
  }

  componentDidMount() {
    fetch(__API_URL__)
      .then(response => response.json())
      .then(data => {
        this.setState({ status: data })
        console.log('Status info', data)
      });

      fetch(__API_URL__ + '/api/sensor?filter[order]=id%20DESC&filter[limit]=3')
      .then(response => response.json())
      .then(data => {
        this.setState({ sensor: data })
        console.log('Sensor info', data)
      });
  }

  getSensorInfo() {
    if (this.state.info) {
      return (
        <ul>
          <li>Started: {this.state.data.started}</li>
          <li>Uptime: {this.state.data.uptime}</li>
        </ul>
      )
    } else {
      return null
    }
  }

  getStatus() {
    if (this.state.info) {
      return (
        <ul>
          <li>Started: {this.state.data.started}</li>
          <li>Uptime: {this.state.data.uptime}</li>
        </ul>
      )
    } else {
      return null
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
          <h1 className="App-title">Welcome to Ambrosio</h1>
        {this.getStatus()}
        <hr />  
        {this.getSensorInfo()}
      </div>
    );
  }
}

export default App;
