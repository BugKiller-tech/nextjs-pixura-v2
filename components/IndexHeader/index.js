import React, { Component } from 'react';
import Link from 'next/link';


import './style.scss';

export default class IndexHeader extends Component {
  render() {
    return (
      <div>
        <div className="index-header">
          <div className="fluid-container">
            <div className="row">
              <div className="col-xl-6">
                <Link href="/">
                  <a title="Home">
                    <img src={require('../../assets/imgs/logo.png')} />
                  </a>
                </Link>
              </div>
              <div className="col-xl-6">
                <div className="top-menu">
                  <ul>
                    <li><Link href="/#features"><a>Features</a></Link></li>
                    <li><Link href="/#creatives"><a>For Creatives</a></Link></li>
                    <li><Link href="/#developers"><a>For Developers</a></Link></li>
                    <li><Link href="/"><a className="launch-button">Launch Now!</a></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row jumbotron-part">
              <div className="col-lg-7 text-md-left text-center">
                <div className="launch-label">Launch a crypto collectibles marketplace in minutes.</div>
                <span className="white-bar"></span>
                <div className="deploy-desc">Deploy smart contracts, create tokens, search, and get analytics on the crypto collectible ecosystem - all in one place.</div>
                <Link href="/"><a className="launch-button1">Launch Now!</a></Link>
              </div>
              <div className="col-lg-5 position-relative">
                <img src={require('../../assets/imgs/header-grid.svg')} style={{ maxWidth: '90%' }} />

                <img className="product-img" src={require('../../assets/imgs/product.jpg')} />
              </div>
            </div>
          </div>
        </div>
        <div className="features" id="features">
          <div className="container">
            <div className="features-label">Features</div>
            <div className="row">
              <div className="col-md-4">
                <div className="feature-card text-center">
                  <img src={require('../../assets/imgs/feature1.svg')} />
                  <div className="label">ASSET ISSUANCE</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae praesentium dolorem aliquid quidem.</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card text-center">
                  <img src={require('../../assets/imgs/feature2.svg')} />
                  <div className="label">EXCHANGE</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae praesentium dolorem aliquid quidem.</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card text-center">
                  <img src={require('../../assets/imgs/feature3.svg')} />
                  <div className="label">ANALYTICS</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae praesentium dolorem aliquid quidem.</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="partners">
          <div className="container">
            <div className="partners-label">Partners</div>
            <div className="row">
              <div className="col-lg-3">
                <div className="partner-card">
                  <img src={require('../../assets/imgs/partner-card-icon.svg')} />
                  <span className="label"> Status</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="partner-card">
                  <img src={require('../../assets/imgs/partner-card-icon.svg')} />
                  <span className="label"> Status</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="partner-card">
                  <img src={require('../../assets/imgs/partner-card-icon.svg')} />
                  <span className="label"> Status</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="partner-card">
                  <img src={require('../../assets/imgs/partner-card-icon.svg')} />
                  <span className="label"> Status</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
