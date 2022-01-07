import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import './Layout.css'

//* <Outlet /> component is a placeholder for a child component that needs to be rendered
//* Outlet component inserts the matching child component
//* All the children routes of Layout will have a common layout
//* The header of an app can be moved into Layout as it needs to be available for all components

//* className and activeClassName deprecated
//* Use isActive attr to style links

const Layout = () => {
    return (
        <>
            <div className='header'>
                <span className='app-title'>React Router v6</span>
                <NavLink 
                    className = {({isActive}) => isActive ? 'active nav-link' : 'nav-link'}
                    to = '/home'
                >
                    Home
                </NavLink>
                <NavLink className = {({isActive}) => isActive ? 'active nav-link' : 'nav-link'} to = '/expenses'>Expenses</NavLink>
                <NavLink className = {({isActive}) => isActive ? 'active nav-link' : 'nav-link'} to = '/invoices'>Invoices</NavLink>
            </div>
            <div className='content-wrapper'>
                <Outlet />
            </div>
        </>
    )
}

export default Layout
