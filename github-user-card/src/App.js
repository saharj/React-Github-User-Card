import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div className="App">Hello world</div>;
  }
}

export default App;
