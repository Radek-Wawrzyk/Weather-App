import React, { Component } from 'react';
import "../styles/footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer-author">{this.props.language.footer}<a href="https://github.com/Radek-Wawrzyk">Radziu</a></p>
        <div className="footer-socials">
          <a href="https://github.com/Radek-Wawrzyk"><span className="fa fa-github" aria-hidden="true"></span></a>
          <a href="https://www.linkedin.com/in/radek-wawrzyk-211948158/"><span className="fa fa-linkedin-square" aria-hidden="true"></span></a>
          <a href="https://www.facebook.com/radek.wawrzyk"><span className="fa fa-facebook-square" aria-hidden="true"></span></a>
        </div>
      </footer>
    );
  }
}

export default Footer;
