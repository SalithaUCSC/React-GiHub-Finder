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
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{gituser.name}</h4><hr/>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={gituser.avatar_url} className="img-thumbnail" alt={gituser.login}/>
                    </div>
                    <div className="col-lg-8">
                    <p className="row text-left">{gituser.bio}</p>
                        <div className="row">                           
                            <span style={{marginRight: "10px"}} className="btn btn-primary">{gituser.public_repos} public repos</span>
                            <span style={{marginRight: "10px"}} className="btn btn-success">{gituser.public_gists} public gists</span>
                            <span style={{marginRight: "10px"}} className="btn btn-info">{gituser.followers} followers</span>
                            <span className="btn btn-warning">{gituser.following} following</span>
                        </div>
                        <br/>
                        <div className="row">
                            <ul className="list-group col-lg-12 text-left">
                                <li className="list-group-item"><b>Username </b>: {gituser.login}</li>
                                <li className="list-group-item"><b>URL </b>: <a href={gituser.url}>{gituser.url}</a></li>
                                <li className="list-group-item"><b>Location </b>: {gituser.location}</li>
                                <li className="list-group-item"><b>Blog </b>: <a href={gituser.blog}>{gituser.blog}</a></li>
                                <li className="list-group-item"><b>Joined on </b>: {gituser.created_at}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default GitHubUser;
