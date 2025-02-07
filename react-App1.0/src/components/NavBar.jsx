// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";

function NavBar() {

    const NavLinkFun = ({isActive}) => {
        return { 
        fontWeight: isActive ? 'bold' : 'normal',
        fontSize: isActive ? '23px' : '20px'
    }
    }
    return (
        <nav>
            {/* <Link  to='/' >Home</Link>
            <Link  to='/about' >About</Link>
            <Link  to='/contact' >Contact</Link> */}

            <NavLink style={NavLinkFun}  to='/' >Home</NavLink>
            <NavLink style={NavLinkFun}  to='/products' >Products</NavLink>
            <NavLink style={NavLinkFun} to='/about' >About</NavLink>
            <NavLink style={NavLinkFun} to='/contact' >Contact</NavLink>
        </nav>
    )
}

export default NavBar