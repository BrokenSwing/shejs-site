import { Link } from "gatsby"
import React from "react"

import "../css/nav-link.css"

const NavLink = ({ to, children }) => (
    <Link 
        to={to}
        activeClassName="active-nav-link"
        class="nav-link"
    >
        {children}
    </Link>
)

export default NavLink