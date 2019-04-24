import React, { Component } from 'react'
import Navbar from './Navbar';
import Img from '../assets/project-img.jpg';
import Footer from './Footer';

class About extends Component {
    render() {
        return (
            <div className="About">
                <Navbar/>
                <div className="container" style={{marginTop: '50px'}}>
                    <h3 className="text-center">What is React GitFinder?</h3><br/>
                    <p style={{fontSize: '18px', textAlign: 'center'}}>GITHUB is a well known version controlling system(VCS). This application is built
                        on <b>GITHUB API</b> which is freely available. Front end is implemented using <b>React JS</b>. Application 
                        is deployed on <b>Heroku Cloud platform</b>.
                        
                    </p>
                    <hr/>   
                    <img src={Img} className="img-fluid img-thumbnail" alt="technologies"/>
                </div>
                <br/>
                <hr/>
                <Footer/>
            </div>
        )
    }
}

export default About;