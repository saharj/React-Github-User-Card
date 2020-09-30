import React from "react";
import axios from "axios";

import UserList from "./components/UserList";
import UserCard from "./components/UserCard";
import UsernameInput from "./components/UsernameInput";
import "./App.css";

const MYUSERNAME = "saharj";
const URL = "https://api.github.com/users/";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: MYUSERNAME,
      data: {},
      followers: [],
      showData: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      this.fetchData();
    }
  }

  onShowFollowers = () => {
    this.setState({ showData: !this.state.showData });
  };

  onUserNameChange = (username) => {
    this.setState({ username });
  };

  fetchData = () => {
    axios
      .get(URL + this.state.username)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(URL + this.state.username + "/followers")
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UsernameInput onUserNameChange={this.onUserNameChange} />
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
