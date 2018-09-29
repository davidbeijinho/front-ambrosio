import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(__API_URL__)
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
        console.log(data);
      });
  }

  getInfo() {
    if (this.state.data) {
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
        {this.getInfo()}
      </div>
    );
  }
}

export default App;
