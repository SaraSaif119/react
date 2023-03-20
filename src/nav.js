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
                            <Link to='skills' class='btn1'>
                                SKILLS
                            </Link>
                        </p>
                        <p>
                            <Link to='projects' class='btn1'>
                                PROJECTS
                            </Link>
                        </p>
                            <Link type="button" class='btn3' to='contact'>JOIN US</Link>
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
                                <Link to='/' class='btn1'>HOME</Link>
                            </p>
                            <p>
                            <Link to='skills' class='btn1'>
                                SKILLS
                            </Link>
                            </p>
                            <p>
                                <Link to='projects' class='btn1'>
                                    PROJECTS
                                </Link>
                            </p>
                        </div> 
                        <Link type="button" class='btn3' to='contact'>JOIN US</Link>
                    </div> 
                    
                   )}
                </div>
            </div>
        </div>
    )
}


export default Navbar;