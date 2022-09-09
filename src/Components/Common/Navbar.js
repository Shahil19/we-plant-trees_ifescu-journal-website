import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contents">Contents</Link></li>
            <li><Link to='/journals'>Journals</Link></li>
            <li tabIndex={0}>
                <i>
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </i>
                <ul className="p-2">
                    <li><i>Submenu 1</i></li>
                    <li><i>Submenu 2</i></li>
                </ul>
            </li>
        </>
    )
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">WePlantTrees</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/' className="btn">Get started</Link>
            </div>
        </div>
    );
};

export default Navbar;