import { useEffect, useState } from "react"
import Axios from "axios"

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function GetAxios() {
    const [my_data, setData] = useState([]);
    useEffect(() => {
        Axios.get(baseUrl).then((response) => {
            setData(response.data);
        });
    });
    return (
        <div>
            {
                my_data.map((item) => {
                    const {id, title, body} = item;
                    return(
                        <div key={id}> 
                            <h3>{id}</h3>
                            <h4>{title.slice(0, 12)}</h4>
                            <h5>{body.slice(0, 55).toUpperCase()}</h5>
                        </div>
                    )
                })
            };
        </div>
    )
}

export default GetAxios