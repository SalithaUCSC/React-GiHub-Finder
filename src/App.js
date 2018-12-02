import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GitHubRepos from './GiHubRepos';
import GitHubUser from './GitHubUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user: {},
      repos: [],
      msg: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  getUser() {
    if (this.state.user != null) {
      Axios.get("https://api.github.com/users/"+ this.state.username)
      .then(res => {
        this.setState({user: res.data});
      })
      .catch(err =>  {
        console.log(err);
      }
        
      );
    }

    if (this.state.user != null) {
      Axios.get("https://api.github.com/users/"+ this.state.username + "/repos")
      .then(res => {
        this.setState({repos: res.data});
      })
      .catch(err => console.log(err));
    }
  }

  handleInputChange(e) {
    this.setState({username: e.target.value})
  } 

  render() {
    return (
      <div className="App" style={{marginBottom: "50px"}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">GITUHB USER SEARCH</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div className="container" style={{marginTop: "50px"}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Type a GitHub Username</h5>
              <input className="form-control" name="username" onChange={this.handleInputChange} style={{marginLeft: "0px", display:"block"}}/>
              <br/><button className="btn btn-primary" onClick={this.getUser}>GET USER</button>
              {this.state.user && this.state.user.login === this.state.username ? <GitHubUser user={this.state.user}/> : null}
              {this.state.user.login === this.state.username && this.state.repos.length > 0 ? <GitHubRepos repos={this.state.repos} user={this.state.user}/> : null}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
