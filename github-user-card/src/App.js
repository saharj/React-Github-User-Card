import React from "react";
import axios from "axios";

import UserList from "./components/UserList";
import "./App.css";

const DUMMYDATA = [
  {
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    events_url: "https://api.github.com/users/mojombo/events{/privacy}",
    followers_url: "https://api.github.com/users/mojombo/followers",
    following_url:
      "https://api.github.com/users/mojombo/following{/other_user}",
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
  },
  {
    avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
    events_url: "https://api.github.com/users/defunkt/events{/privacy}",
    followers_url: "https://api.github.com/users/defunkt/followers",
    following_url:
      "https://api.github.com/users/defunkt/following{/other_user}",
    gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
    gravatar_id: "",
    html_url: "https://github.com/defunkt",
    id: 2,
    login: "defunkt",
    node_id: "MDQ6VXNlcjI=",
    organizations_url: "https://api.github.com/users/defunkt/orgs",
    received_events_url: "https://api.github.com/users/defunkt/received_events",
    repos_url: "https://api.github.com/users/defunkt/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
    type: "User",
    url: "https://api.github.com/users/defunkt",
  },
];

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: DUMMYDATA,
    };
  }

  componentDidMount() {
    // axios
    //   .get("https://api.github.com/users")
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({ data: res.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserList list={this.state.data} />
      </div>
    );
  }
}

export default App;
