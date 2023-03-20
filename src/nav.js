import React, { useState } from "react";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { Link ,NavLink } from "react-router-dom";

const Navbar=()=>{
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar-bg">
            <div className="sb__navbar">
                <div className="sb__navbar-links">
                    <h1 class='brand'>sara</h1>
                    <div className="sb__navbar-links_container">
                    </div>
                </div>
                <div className="sb__navbar-button">
                        <p>
                            <Link to='/' class='btn1'>
                                HOME
                            </Link>
                        </p>
                        <p>
                            <NavLink to='/skills' class='btn1'>
                                SKILLS
                            </NavLink>
                        </p>
                        <p>
                            <NavLink to='/projects' class='btn1'>
                                PROJECTS
                            </NavLink>
                        </p>
                 
                        <Link type="button" to='contact' class='btn3'>JOIN US</Link>
                   
                </div>
                <div className="sb__navbar-menu">
                   {toggleMenu ? (
                    <RiCloseLine
                    color="#000"
                    size={27}
                    onClick={()=> setToggleMenu(false)}
                    class='icon'
                   />) : (
                    <RiMenu3Line
                    color="#000"
                    size={27}
                    onClick={()=> setToggleMenu(true)}
                    class='icon'
                    />
                   )}
                   {toggleMenu && (
                    <div className="sb__navbar-menu_container scale-up-center">
                        <div className="sb__navbar-menu_container-links">
                            <p>
                                <NavLink to='/'>HOME</NavLink>
                            </p>
                            <p>
                            <NavLink to='/skills' class='btn1'>
                                SKILLS
                            </NavLink>
                            </p>
                            <p>
                                <NavLink to='/projects' class='btn1'>
                                    PROJECTS
                                </NavLink>
                            </p>
                            </div>
                          <div className="sb__navbar-menu_container-links-sign">
                           
                                <button type="button" class='btn3'>JOIN US</button>
                           
                            </div> 
                            </div> 
                   )}
                </div>
            </div>
        </div>
    )
}


export default Navbar;