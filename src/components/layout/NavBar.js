import React, { Component } from 'react';
// import styled from 'styled-components';


// const NavBarStyle = styled.nav`

// `;



export default class NavBar extends Component {
    render() {
        return (
            <div>
                 <nav className="navbar navbar-expend-md navbar-dark fixed-top">
                     <a
                     href="/"
                     className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
                     >
                        pokedex
                    </a>
                 </nav>
            </div>
        )
    }
}
