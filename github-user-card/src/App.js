import React from "react";
import axios from "axios";

import UserList from "./components/UserList";
import UserCard from "./components/UserCard";
import "./App.css";

const DUMMYDATA = {
  avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  events_url: "https://api.github.com/users/mojombo/events{/privacy}",
  followers_url: "https://api.github.com/users/mojombo/followers",
  following_url: "https://api.github.com/users/mojombo/following{/other_user}",
  gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
  gravatar_id: "",
  html_url: "https://github.com/mojombo",
  id: 1,
  login: "mojombo",
  node_id: "MDQ6VXNlcjE=",
  organizations_url: "https://api.github.com/users/mojombo/orgs",
  received_events_url: "https://api.github.com/users/mojombo/received_events",
  repos_url: "https://api.github.com/users/mojombo/repos",
  site_admin: false,
  starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
  type: "User",
  url: "https://api.github.com/users/mojombo",
};

const MYUSERNAME = "saharj";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: {},
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/" + MYUSERNAME)
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onShowFollowers = (bool) => {
    if (bool) {
      axios
        .get("https://api.github.com/users/" + MYUSERNAME + "/followers")
        .then((res) => {
          console.log(res);
          this.setState({ followers: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard
          data={this.state.data}
          onShowFollowers={this.onShowFollowers}
        />
        {this.state.followers.length > 0 && (
          <UserList list={this.state.followers} />
        )}
      </div>
    );
  }
}

export default App;
