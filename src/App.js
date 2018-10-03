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
    fetch(process.env.REACT_APP_API_URL)
      .then(response => response.json())
      .then(data => {
        this.setState({ status: data })
        console.log('Status info', data)
      });

    fetch(process.env.REACT_APP_API_URL + '/api/sensor?filter[order]=id%20DESC&filter[limit]=3')
      .then(response => response.json())
      .then(data => {
        this.setState({ sensor: data })
        console.log('Sensor info', data)
      });
  }

  getSensorInfo() {
    if (this.state.sensor && this.state.sensor.length) {
      return (
        <ul>
          {this.state.sensor.map((values) => <li key={values.id}>Temperature: {values.temperature}</li>)}
        </ul>
      )
    } else if (this.state.sensor) {
      return <p>No Sensor Information</p>
    } else {
      return <p>...Loading</p>
    }
  }

  getStatusInfo() {
    if (this.state.status) {
      return (
        <ul>
          <li>Started: {this.state.status.started}</li>
          <li>Uptime: {this.state.status.uptime}</li>
        </ul>
      )
    } else {
      return <p>...Loading</p>
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1 className="App-title">Welcome to Ambrosio</h1>
        {this.getStatusInfo()}
        <hr />
        {this.getSensorInfo()}
      </div>
    );
  }
}

export default App;
