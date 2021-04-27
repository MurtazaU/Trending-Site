import React from 'react'
import Data from './Data'
import './Content.css'
import Footer from './Footer'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const Content = () => {
 return (
  <div className="content">
    <div className="lower-header">
   <h3>Shows Of Every Services</h3>
     <img src="https://img.reelgood.com/service-logos/netflix.svg" alt=""/>
    <img src="https://img.reelgood.com/service-logos/amazon_prime.svg" alt=""/>
    <img src="https://img.reelgood.com/service-logos/hulu.svg" alt=""/>
    <img src="https://img.reelgood.com/service-logos/disney_plus.svg" alt=""/>
    <img src="https://img.reelgood.com/service-logos/hbo.svg" alt=""/>
   </div>
   <div className="bio">
    <Col md="4">
    <h3>Trending TV Shows <Badge variant="secondary">Of Every Services</Badge></h3>
    <p className="bio-p">Below are all the top trending shows available to stream online. If you're looking for the hottest shows to watch on-demand across Netflix, Hulu, Prime Video, HBO and 300 more services, check out the list below.</p>
    </Col>
   </div>
   <div className="filter">
      <Button variant="outline-light" className="content-button1">Filter</Button>
      <Button variant="outline-light" className="content-button2">Sort By Default</Button>
   </div>
   <Data />
   <Footer />
  </div>
 )
}

export default Content
