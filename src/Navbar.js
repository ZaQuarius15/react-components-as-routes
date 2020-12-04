import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink to='/' exact style={link} activeStyle={{background: 'darkblue'}} >Home</NavLink>
                <NavLink to='/about' exact style={link} activeStyle={{background: 'darkblue'}} >About</NavLink>
                <NavLink to='/login' exact style={link} activeStyle={{background: 'darkblue'}} >Login</NavLink>
            </div>
        )
    }
}

export default Navbar
