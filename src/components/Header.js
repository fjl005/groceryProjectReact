import { useState } from 'react';

import {
  Navbar,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Budget from './Budget';


const Header = () => {
  // useState to determine whether toggler is clicked or not. 
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Budget />
      navbar
    </>
    
  );
};

export default Header;