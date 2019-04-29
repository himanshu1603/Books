import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
              
              
                <Link to="/" class="navbar-brand"><i class="fas fa-book"></i> </Link>
           

              
              <ul class="navbar-nav">
                <li class="nav-item">
                <Link to="/" class="nav-link"> Home </Link>
                  
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link"> About </Link>
                </li>
                <li class="nav-item">
                  <Link to="/team" class="nav-link"> Team </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class="nav-link"> Contact Us </Link>
                </li>
              </ul>
            </nav>
        </header>
    )
}

export default Header;