import { useParams } from "react-router-dom"


function UserDetialPage() {
    // const userid = useParams();
    // const id = userid.id;
    
    const {id} = useParams();

    return (
        <div><h1>User Details Page.. =  {id}</h1></div>
    )
}

export default UserDetialPage