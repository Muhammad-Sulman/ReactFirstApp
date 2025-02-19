import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
        const [id, setId] = useState(0);
        const [name, setName] = useState("");
        const [age, setAge] = useState("");
        const [email, setEmail] = useState("");

        const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setAge(localStorage.getItem("age"));
        setEmail(localStorage.getItem("email"));
    }, []);


    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://67b6071807ba6e59083f7e1c.mockapi.io/crud/${id}`, {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/read');
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="col-md-6 col-lg-4">
        <div className="bg-primary p-4 text-center text-white rounded-top">
            <h2>Update Data</h2>
            
        </div>
        <form className="p-4 bg-light rounded-bottom shadow " onSubmit={handleUpdate} >
            <div className="mb-3 form-group ">
            <label htmlFor="name" className="form-label">
                Name
            </label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"  />
            </div>

            <div className="mb-3 form-group">
            <label htmlFor="age" className="form-label">
                Age
            </label>
            <input type="number" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age"  />
            </div>
            <div className="mb-3 form-group">
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"   />
            </div>
            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Update
            </button>
            </div>
        </form>
        </div>
    </div>
    </>
    )
}

export default Edit