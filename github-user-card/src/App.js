import React from "react";
import axios from "axios";

import UserList from "./components/UserList";
import UserCard from "./components/UserCard";
import "./App.css";

const MYUSERNAME = "saharj";
const URL = "https://api.github.com/users/";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: {},
      followers: [],
      showData: false,
    };
  }

  componentDidMount() {
    axios
      .get(URL + MYUSERNAME)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(URL + MYUSERNAME + "/followers")
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onShowFollowers = () => {
    this.setState({ showData: !this.state.showData });
  };
  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard
          data={this.state.data}
          onShowFollowers={this.onShowFollowers}
          showData={this.state.showData}
        />
        {this.state.showData && <UserList list={this.state.followers} />}
      </div>
    );
  }
}

export default App;
