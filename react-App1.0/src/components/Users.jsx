import { Link, Outlet } from "react-router-dom"


function Users() {
    return (
        <>
        <div><h1>Users Page</h1></div>
        <Link to={'/users/1'} >User 1</Link> &nbsp;
        <Link to={'/users/2'} >User 2</Link> &nbsp;
        <Link to={'/users/3'} >User 3</Link><br /><br />
        <Outlet/>
        </>
    )
}

export default Users