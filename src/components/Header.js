import React from 'react';

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
              
              <a class="navbar-brand" href="/"><i class="fas fa-book"></i></a>
           

              
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/team">Team</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">Contact Us</a>
                </li>
              </ul>
            </nav>
        </header>
    )
}

export default Header;