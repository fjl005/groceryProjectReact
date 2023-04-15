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
      <Navbar expand='md' className='navbar'>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                          Budget 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/produce'>
                          Produce
                        </NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/protein'>
                          Protein
                        </NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/Summary'>
                          Summary
                        </NavLink>

                    </NavItem>
                </Nav>

            </Collapse>
        </Navbar>
    </>
    
  );
};

export default Header;