import  Axios  from "axios";
import { useState } from "react"


function PostAxios() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts", {
            title,
            body
            //title: my_title,
            //body: my_body
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter Title: &nbsp;</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br /><br />
                <label htmlFor="">Enter body: &nbsp;</label>
                <input type="text" name="body" value={body} onChange={(e) => setBody(e.target.value)} />
                <br /><br />
                <input type="submit" value="Post" />
            </form>
        </div>
    )
}

export default PostAxios