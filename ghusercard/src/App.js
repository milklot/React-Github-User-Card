import './App.css';
import axios from "axios";
import React from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "milklot",
      data: []
    }
  }

  componentDidMount() {
    this.search_user(this.state.username);
  }

  search_user = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        console.log(res.data);
          this.setState({
            ...this.state,
            username: user,
            data: res.data
          })
        })
      .catch((err) => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="App">
        <h2>GitHub User Card</h2>
        <Search search_user={this.search_user}/>
        <UserCard data={this.state.data}/>
      </div>
      );
    } 
  }

export default App;
