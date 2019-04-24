import React, { Component } from 'react'
import Navbar from './Navbar';
import MyImg from '../assets/salitha.jpg';
import Footer from './Footer';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <Navbar/>
                <div className="container" style={{marginTop: '50px'}}>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={MyImg} className="img-fluid img-thumbnail" alt="salitha"/>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body" style={{fontSize: '18px', textAlign: 'justify'}}>
                                <h5>Hi Guys!</h5><hr/>
                                    <p>
                                        I'm a 4th year undergraduate at University of Colombo School of Computing, 
                                        following Bsc(Hons) in Information Systems degree program.
                                    </p>
                                    <p>
                                        I can introduce my self as a tech enthusiastic guy. I like to work with web 
                                        development technologis. Blogging is another passion of me and you can find 
                                        my interests from here. <br/>
                                        <a href="https://salitha94.blogspot.com">https://salitha94.blogspot.com</a>
                                    </p>                        
                                    <b>Familiar Technologies :</b> <br/>HTML | CSS | Bootstrap | Java | SpringBoot | Laravel | CodeIgniter | React JS | Express JS | MySQL | MongoDB
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div style={{fontSize: '18px'}}>
                        <h5><b>Send Me Your Suggestions :</b></h5><hr/>
                        <p><i className="fas fa-envelope"></i> salithachathuranga94@gmail.com</p>
                        <p><i className="fas fa-phone"></i> +94 77 878 7607</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Contact;