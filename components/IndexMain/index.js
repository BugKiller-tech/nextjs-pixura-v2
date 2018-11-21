import React, { Component } from 'react';
import Link from 'next/link';
import './style.scss';


export default class IndexMain extends Component {
  render() {
    return (
      <div className="index-main">
        <div className="horizontal2 part1">
          <div className="left">
            <img className="game-controller" src={require('../../assets/imgs/game-controller.png')} />
          </div>
          <div className="right">
            <div className="for-brand-label">For Brands & Game Studios</div>
            <span className="gray-bar"></span>
            <div className="desc">
              Launch custom crypto-collectible games, apps and giveaways. Use flexible marketplace templates, or work with us directly for branded whitelabel solutions. 
            </div>
            <Link href="/"><a className="get-started-button">Get Started</a></Link>
          </div>
        </div>

        <div className="horizontal2 part2">
          <div className="left">
            <div>
              <div className="for-brand-label">For Creatives</div>
              <span className="gray-bar"></span>
              <div className="desc">
                Launch your NFT marketplace with zero coding required. GUI tokenization tools & marketplace. Customize your marketplace look and feel.
              </div>
              <Link href="/"><a className="open-your-story-button">Open Your Store Today</a></Link>
            </div>
          </div>
          <div className="right">
            <img className="computer-img" src={require('../../assets/imgs/computer.png')} />            
          </div>
        </div>

        <div className="horizontal2 part3">
          <div className="left">
            

            <div className="dev-list">
              <div className="dev-item">
                adsfafasdfs
              </div>
              <div className="dev-item">
                adsfafasdfs
              </div>
              <div className="dev-item">
                adsfafasdfs
              </div>
            </div>
            <div className="light-purple-bg"></div>
          </div>
          <div className="right">
            <div className="for-brand-label">For Developers</div>
            <span className="gray-bar"></span>
            <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
            <Link href="/"><a className="checkout-dev-tool-button">Check Out Our Developer Tools</a></Link>
          </div>
        </div>
      </div>
    )
  }
}
