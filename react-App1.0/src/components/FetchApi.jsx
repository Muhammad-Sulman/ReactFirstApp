import { useEffect } from "react";
import { useState } from "react"


function FetchApi() {
    const [posts, setPosts]  = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
            // console.log(response);
            response.json().then((result) => {
                setPosts(result);
            })
        })
    })
    return (
        <div>
            
                {
                    posts.map((post) => {
                        return (
                            <>
                            <h3>
                                {post.id}
                            </h3>
                            <h4>
                                {post.title}
                            </h4>
                            </>
                        )
                    })
                }
            
        </div>
    )
}

export default FetchApi