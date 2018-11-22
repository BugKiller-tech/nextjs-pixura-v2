import React, { Component } from 'react'
import './style.scss'

export default class IndexAbout extends Component {
  render() {
    return (
      <div className="index-about">
        <img className="grid-bg" src={ require('../../assets/imgs/about-grid.svg') } alt=""/>
        <div className="about-pixura">
          <div className="label">ABOUT PIXURA</div>
          <div className="desc">
          Pixura is a platform for creating, tracking, and exchanging crypto collectibles. We offer GUI tools for non technical users and expose power APIs for develoeprs and custom integrations. Our smart contract leverage Open Zepplin's ERC 721 standard solidity contracts.
          </div>
        </div>
        <div className="the-team-label">The Team</div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img className="team-member-img" src={require('../../assets/imgs/team/ceo.png')} alt=""/>
              <div className="name">DAVE JOHNSON</div>
              <div className="position">CEO</div>
            </div>
            <div className="col-md-3 text-center">
              <img className="team-member-img" src={require('../../assets/imgs/team/cto.png')} alt=""/>
              <div className="name">GERALD DAVISON</div>
              <div className="position">CTO</div>
            </div>
            <div className="col-md-3 text-center">
              <img className="team-member-img" src={require('../../assets/imgs/team/lead-investor.png')} alt=""/>
              <div className="name">TIM KINGMAN</div>
              <div className="position">Lead Investor</div>
            </div>
            <div className="col-md-3 text-center">
              <img className="team-member-img" src={require('../../assets/imgs/team/sales-lead.png')} alt=""/>
              <div className="name">MELISSA JONES</div>
              <div className="position">Sales Lead</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
