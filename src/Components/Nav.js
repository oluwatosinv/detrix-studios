import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
   
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <MDBNavLink to="/">
            <img src='/img/logo.png' alt='logo' className='logo'/>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">About US</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/WeddingPhotos">Photos</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Videos</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBNavLink to="/WeddingVideos" className='navAdjust'>
                    <MDBDropdownItem >Wedding Videos</MDBDropdownItem>
                  </MDBNavLink>
                  <MDBNavLink to="/NonweddingVideos" className='navAdjust'>
                    <MDBDropdownItem >Non Wedding Videos</MDBDropdownItem>
                  </MDBNavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Photos</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBNavLink to="/WeddingPhotos" className='navAdjust'>
                    <MDBDropdownItem >Wedding Photos</MDBDropdownItem>
                  </MDBNavLink>
                  <MDBNavLink to="/NonweddingPhotos" className='navAdjust'>
                    <MDBDropdownItem>Non Wedding Photos</MDBDropdownItem>
                  </MDBNavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBNavLink to="/Client" target="_blank">Client Gallery</MDBNavLink>
            </MDBNavItem>
   
            <MDBNavItem>
              <MDBNavLink to="/ContactUs">Contact US</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    
    );
  }
}

export default NavbarPage;