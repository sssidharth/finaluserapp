import React, { useState } from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import './Header.css';

const Header = ({theme, setTheme}) => {
    const [open, setOpen] = useState(false);
    
    function toggleNav(){
        setOpen(!open)
    }

    function toggleTheme(){
       setTheme(!theme)
    }

    return(
        <React.Fragment>
        <Navbar dark expand="md">
        <div className="container">
         <NavbarToggler onClick={() => toggleNav()}/>
         <NavbarBrand className="mr-auto">
         <span className="fa fa-user-circle fa-lg"/>
         </NavbarBrand>
         <Collapse isOpen={open} navbar>
         <Nav navbar>
             <NavItem>
                 <NavLink className="nav-link" to="/home">
                     <span className="fa fa-home fa-lg"/> Home
                 </NavLink>
             </NavItem>
             <NavItem>
                 <NavLink className="nav-link" to="/LikedUsers">
                     <span className="fa fa-info fa-lg"/> Liked Users
                 </NavLink>
             </NavItem>
         </Nav>
         <Nav className="ml-auto" navbar>
                <NavItem>
                <BootstrapSwitchButton
                     checked={!theme}
                     size="sm"
                     onlabel='On'
                     offlabel='Off'
                     onChange={toggleTheme}
                     onstyle="dark" offstyle="secondary"/>                  
                </NavItem>
            </Nav>
         </Collapse>
     </div>
   </Navbar>
   </React.Fragment>
    )
}
export default Header;