import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import swal from 'sweetalert';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
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
        <Navbar/>
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
                          <Link to={"/users/"+user.login}>
                            <button className="btn btn-default" value={user.login}>{user.login}</button>  
                          </Link>
                                              
                          </div>
                        </div>
                      </div>                                         
                  )}                  
              ) : null}
            </div>
        </div>
        <hr/>
        <Footer/>
      </div>

    );
  }
}

export default App;
