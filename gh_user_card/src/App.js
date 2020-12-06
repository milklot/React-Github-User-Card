import './App.css';
import axios from "axios";
import React, { Component } from 'react';
import './index.css'
import styled from "styled-components"
import GitCard from './components/GitCard'

const UserDiv = styled.div`
  h2 {
    text-align:center;
    padding:1.6%;
  }

  * {
    display:flex;
    flex-direction: column;
    align-items:center;
  }
  button {
    margin:2% 40%;
    width:50%;
    font-size:1.4rem;
    border-radius:10px;
    display:flex;
    align-items:center;
  }
  .styledCard {
    display:flex;
    width:400px;
    margin:0 auto;
    margin-top:5%;
  }

  form {
    width:30%;
  }

  label {
    padding:2%;
    font-size:1.7rem;
  }
`

const fetchUser = (userName) => {
  return axios
    .get(`https://api.github.com/users/${userName}`)
    .then(res => {
      return (res);
    })
    .catch(err => {
      alert('Please enter valid username');
      console.log("error log:", err);
    });
};

class App extends Component {
  state = {
    input: "",
    gitcard : []
  };

  componentDidMount() {
    fetchUser("milklot").then(res => {
      this.setState({
        gitcard:res.data
      });
    })
    .catch(err => console.log(err))
  };

  handleChanges = (event) => {
    this.setState({
      ...this.state,
      input:event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetchUser(this.state.input)
    .then((res) => {
      this.setState({
        gitcard: res.data,
        inputValue: ""
      });
    })
    .catch(err => console.log(err))
  }

render(){
    return (
      <body>
      <UserDiv>
          <div>
            <h2>GitHub User-Card</h2>
            <form onSubmit={this.onSubmit}>
              <label>
                Search a GitHub Username
                <input
                  type="text"
                  value={this.state.input}
                  onChange={this.handleChanges}
                />
              </label>
              <button>Search</button>
            </form>
            </div>
          <div className="styledCard">
            <GitCard gitcard={this.state.gitcard} />
          </div>
      </UserDiv>
      </body>
    )
  }
}

export default App;
