import React, { Component } from 'react';
import './App.css';

class GitHubRepos extends Component {
  
  render() {
    var gituser = this.props.user;
    var gitrepos = this.props.repos;
    return (
      <div className="App" style={{marginTop: "50px"}}>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-left">{gituser.name}'s Public Repositories</h4><hr/>
              {                 
                  gitrepos.length > 0 ?
                    gitrepos.map((repo, i) => {
                        return  (
                            <div className="row" key={i}>
                                <div className="col-lg-11 text-left" style={{marginBottom: "30px"}}>
                                    <a href={repo.html_url}><h5>{repo.full_name}</h5></a>
                                    <p>{repo.description}</p>
                                </div>
                                <div className="col-lg-1">
                                    <div className="row">
                                        <span style={{float: "right"}} className="badge badge-success">{repo.forks_count} forks</span>
                                    </div>
                                </div>

                            </div>
                        );
                    })
                  : null
              }
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default GitHubRepos;
