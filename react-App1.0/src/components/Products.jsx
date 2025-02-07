import { Link, Outlet } from "react-router-dom"


function Products() {
    return (
    <>
    <div><h1>Products</h1></div>
    <nav>
        <Link to={'shirts'} >Shirts</Link>
        <Link to={'jeans'} >Jeans</Link>
    </nav>
    
    <Outlet></Outlet>
    </>
    )
}

export default Products