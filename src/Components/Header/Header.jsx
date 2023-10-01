import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navlink=<>
    <NavLink to={"/"}><li>Home</li></NavLink>
    <NavLink to={"/donation"}><li>Donation</li></NavLink>
    <NavLink to={"/statactics"}><li>Stactics</li></NavLink>
    </>
    return (
        <div>
                    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl"><img src="https://i.ibb.co/4txDDcY/Logo.png" alt="" /></a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 ml-6">
            {
           navlink

            }
            </ul>
        </div>
        </div>
            
        </div>
    );
};

export default Header;