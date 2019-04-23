import React, { Component } from 'react';
import './App.css';

class GitHubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    var gituser = this.props.user;
    return (
      <div className="App" style={{marginTop: "50px"}}>
        <div className="container">
          <h4 className="card-title">{gituser.name}</h4><hr/>
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12"><br/>
                    <img src={gituser.avatar_url} className="img-thumbnail" alt={gituser.login}/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12"><br/>
                <p className="row text-left">{gituser.bio}</p>
                    <div className="row"> 
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <span className="btn btn-primary btn-block">{gituser.public_repos} public repos</span><br/>
                      </div> 
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <span className="btn btn-success btn-block">{gituser.public_gists} public gists</span><br/>
                      </div> 
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <span className="btn btn-info btn-block">{gituser.followers} followers</span><br/>
                      </div> 
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <span className="btn btn-warning btn-block">{gituser.following} following</span><br/>
                      </div>                          
                    </div>
                    <br/>
                    <div className="row">
                        <ul className="list-group col-lg-12 text-left">
                            <li className="list-group-item"><b>Username </b>: {gituser.login}</li>
                            <li className="list-group-item"><b>URL </b>: <a href={gituser.html_url}>{gituser.html_url}</a></li>
                            <li className="list-group-item"><b>Location </b>: {gituser.location}</li>
                            <li className="list-group-item"><b>Blog </b>: <a href={gituser.blog}>{gituser.blog}</a></li>
                            <li className="list-group-item"><b>Joined on </b>: {gituser.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>

    );
  }
}

export default GitHubUser;
