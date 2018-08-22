import React, { Component } from "react";
import User from "./User/User";
import axios from "axios";

class UserList extends Component {
  state = {
    users: []
  };

  //promise example

  componentDidMount = () => {
    axios({ url: "https://jsonplaceholder.typicode.com/users", method: "get" })
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(err => {});
  };

  render() {
    return <User users={this.state.users} />;
  }
}

export default UserList;
