import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
 return (
  <Navbar variant="dark" className="Navbar">
   <Navbar.Brand className="logo">Logo</Navbar.Brand>
   <Nav className="mr-auto">
    <Nav.Link href="#"> TV Shows</Nav.Link>
   <Nav.Link href="#"> Movies</Nav.Link>
   <Nav.Link href="#"> New,Coming,Leaving</Nav.Link>
  </Nav>
  </Navbar>
 )
}

export default Header
