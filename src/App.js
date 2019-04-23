import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import swal from 'sweetalert';
// import img from './assets/project-img.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user: {},
      users: [],
      count: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

  getUsers() {
    if (this.state.user != null) {
      Axios.get("https://api.github.com/search/users?q="+ this.state.username)
      .then(res => {
        // console.log(res.data);
        this.setState({users: res.data.items});
        if (res.data.total_count === 0) {
          swal({
            title: "404 Not Found",
            text: "There are no users named as "+this.state.username,
            icon: "error",
            button: false,
            timer: 3000
          });
        }
        this.setState({count: res.data.total_count});
      })
      .catch(err =>  {
        console.log(err);
      }
        
      );
    }
  }

  getDetails(e) {
    // console.log(e.currentTarget.value);
      Axios.get("https://api.github.com/users/"+ e.currentTarget.value)
      .then(res => {
        this.setState({user: res.data});
        // console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  handleInputChange(e) {
    this.setState({username: e.target.value})
  } 

  render() {
    var data = this.state.users;
    return (
      <div className="App" style={{marginBottom: "50px"}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/"><i className="fab fa-github"></i> GITUHB USER SEARCH</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 
        </nav>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="fsdfd">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="ssf">Disabled</a>
            </li>
          </ul>
        </div> */}
        <div className="container" style={{marginTop: "50px"}}>
          <h4>Simple application to find GitHub users</h4><br/><br/>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Type a GitHub Username</h5>
              <input className="form-control" name="username" onChange={this.handleInputChange} style={{marginLeft: "0px", display:"block"}}/>
              <br/><button className="btn btn-primary" onClick={this.getUsers}>SEARCH USERS</button>
            </div>
          </div>
        </div>
        <div className="container" style={{marginTop: "50px"}}>
          {
            this.state.count ? 
              <div>
                <h4>Results found for user "{this.state.username}"...<span> ({this.state.count})</span></h4>
                <p><b>Click on username for more details of each user</b></p>                
              </div> 
            : null
          }
          <hr/>
          <div className="row">
            {data ?                          
              data.map((user, i) => {                  
                  return (                                     
                      <div className="col-lg-4 col-md-6 col-sm-12" style={{marginBottom: "30px"}} key={i.toString()}>
                        <div className="card">
                          <div className="card-body">
                          <img src={user.avatar_url} alt="user propic" className="img-thumbnail"/><br/>
                          <button  data-toggle="modal" data-target="#userModal" className="btn btn-default" onClick={this.getDetails} value={user.login}>{user.login}</button>                      
                          </div>
                        </div>
                      </div>                                         
                  )}                  
              ) : null}
            </div>
        </div>

        <div className="modal fade" id="userModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">GitHub Profile</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{this.state.user.name}</h4><hr/>
                      <div className="row">
                          <div className="col-lg-4 col-md-12 col-sm-12">
                              <img src={this.state.user.avatar_url} className="img-thumbnail" alt={this.state.user.login}/>
                          </div>
                          <div className="col-lg-8 col-md-12 col-sm-12">
                          <p className="row text-left">{this.state.user.bio}</p>
                              <div className="row">                           
                                  <span style={{marginRight: "10px"}} className="btn btn-primary">{this.state.user.public_repos} public repos</span>
                                  <span style={{marginRight: "10px"}} className="btn btn-success">{this.state.user.public_gists} public gists</span>
                                  <span style={{marginRight: "10px"}} className="btn btn-info">{this.state.user.followers} followers</span>
                                  <span className="btn btn-warning">{this.state.user.following} following</span>
                              </div>
                              <br/>
                              <div className="row">
                                  <ul className="list-group col-lg-12 text-left">
                                      <li className="list-group-item"><b>Username </b>: {this.state.user.login}</li>
                                      <li className="list-group-item"><b>URL </b>: <a href={"https://github.com/"+this.state.user.login}>{"https://github.com/"+this.state.user.login}</a></li>
                                      <li className="list-group-item"><b>Location </b>: {this.state.user.location}</li>
                                      <li className="list-group-item"><b>Joined on </b>: {this.state.user.created_at}</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <small>~ Designed and developed by Salitha Chathuranga ~</small><br/><br/>
        <div className="container">
            <ul className="social">
                <li><a href="https://www.facebook.com/saliya.genious"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/in/salitha-chathuranga-1a758b117"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/salitha94"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://github.com/SalithaUCSC"><i className="fab fa-github"></i></a></li>
                <li><a href="https://salitha94.blogspot.com"><i className="fab fa-blogger"></i></a></li>
            </ul> 
        </div>
      </div>

    );
  }
}

export default App;
