import React from 'react';
import { NavLink } from "react-router-dom";

export default function Nav(){
    return(
        <div className="Nav">
            <div className="NavTitle">
                <div className="NavTitle-1">N</div>
                <div className="NavTitle-2">A</div>
                <div className="NavTitle-3">V</div>
            </div>

            <div className="Links">
                <NavLink className="NavLink NavLink-H" exact to="/">Home</NavLink>
                <NavLink className="NavLink NavLink-A" to="/about">About</NavLink>
                <NavLink className="NavLink NavLink-PR" to="/projects">Projects</NavLink>
                <NavLink className="NavLink NavLink-PO" to="/portfolio">Portfolio</NavLink>
                <NavLink className="NavLink NavLink-C" to="/contact">Contact</NavLink>
            </div>
        </div>
    )
}