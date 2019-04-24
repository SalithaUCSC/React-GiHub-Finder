import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <br/><p className="text-center">~ Designed and developed by Salitha Chathuranga ~</p>
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
        )
    }
}

export default Footer;