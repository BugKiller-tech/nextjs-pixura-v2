import React, { Component } from 'react'
import Link from 'next/link'
import './style.scss'

export default class IndexFooter extends Component {
  render() {
    return (
      <div className="index-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={require('../../assets/imgs/logo-bottom.svg')} />
              <div className="row footer-menu">
                <div className="col-lg-3">
                  <Link href="/#features"><a className="footer-menu-item">Features</a></Link>
                </div>
                <div className="col-lg-3">
                  <Link href="/#creatives"><a className="footer-menu-item">For Creatives</a></Link>
                </div>
                <div className="col-lg-3">
                  <Link href="/#developers"><a className="footer-menu-item">For Developers</a></Link>
                </div>
                <div className="col-lg-3">
                  <Link href="/"><a className="footer-menu-item">LAUNCH</a></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get-in-touch">
                <div className="label">STAY IN TOUCH</div>
                <div className="subscribe-box">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="copyright">Copyright 2018, Pixura Company</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
