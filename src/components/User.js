import React, { Component } from 'react'
import Axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            repos: []
        }
    }

    componentDidMount() {
        Axios.get(`https://api.github.com/users/${this.props.match.params.id}`)
        .then(res => {
            this.setState({ user: res.data })
        });

        Axios.get(`https://api.github.com/users/${this.props.match.params.id}/repos`)
        .then(res => {
            // console.log(res.data);
            this.setState({ repos: res.data })
        });
    }

    render() {
        var repoData = this.state.repos;
        return (
            <div className="User">
                <Navbar/>
                <div className="container" style={{marginTop: '50px'}}>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{this.state.user.name}</h4><hr/>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <img src={this.state.user.avatar_url} className="img-fluid img-thumbnail" alt={this.state.user.login} style={{height: '270px'}}/>
                                <br/><br/>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    {this.state.user.bio ? <p className="text-left">{this.state.user.bio}</p> : <p className="text-left">Bio is not provided</p>}
                                        <div className="row">                           
                                            <div className="col-lg-3 col-md-3 col-sm-6"><span className="btn btn-primary btn-sm btn-block" style={{fontSize: '.8rem'}}>{this.state.user.public_repos} repos</span></div>
                                            <div className="col-lg-3 col-md-3 col-sm-6"><span className="btn btn-success btn-sm btn-block" style={{fontSize: '.8rem'}}>{this.state.user.public_gists} gists</span></div>
                                            <div className="col-lg-3 col-md-3 col-sm-6"><span className="btn btn-info btn-sm btn-block" style={{fontSize: '.8rem'}}>{this.state.user.followers} followers</span></div>
                                            <div className="col-lg-3 col-md-3 col-sm-6"><span className="btn btn-warning btn-sm btn-block" style={{fontSize: '.8rem'}}>{this.state.user.following} following</span></div>
                                        </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ul className="list-group col-lg-12 text-left" style={{border: 'none'}}>
                                                <li className="list-group-item"><b>Username </b>: {this.state.user.login}</li>
                                                <li className="list-group-item"><b>URL </b>: <a href={"https://github.com/"+this.state.user.login}>{"https://github.com/"+this.state.user.login}</a></li>
                                                <li className="list-group-item"><b>Joined on </b>: {this.state.user.created_at}</li>
                                            </ul>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{this.state.user.name}'s GitHub Repositories</h5><hr/>
                            <div className="row">
                            {repoData ?                          
                            repoData.map((repo, i) => {                  
                                return (                                     
                                    <div className="col-lg-12" style={{marginBottom: "30px"}} key={i.toString()}>
                                        <div className="card">
                                            <div className="card-body"> 
                                                <div className="row">
                                                    <div className="col-lg-9 col-md-12 col-sm-12">
                                                        <p >{repo.name}</p> 
                                                    </div>
                                                <div className="col-lg-3 col-md-12 col-sm-12">                                                     
                                                        <a href={repo.html_url} style={{float: 'right'}} className="btn btn-default btn-sm">
                                                            <i className="fab fa-github"></i> source
                                                        </a>
                                                        <a href={repo.html_url+"/archive/master.zip"} style={{float: 'right'}} className="btn btn-success btn-sm">
                                                            <i className="fas fa-download"></i> download
                                                        </a>
                                                    </div>
                                                </div>                                                                
                                            </div>
                                        </div>
                                    </div>                                         
                                )}                  
                            ) : null}
                            </div>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default User;