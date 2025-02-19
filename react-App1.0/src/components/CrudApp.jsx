import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function CrudApp() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://67b6071807ba6e59083f7e1c.mockapi.io/crud", {
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
            <h2>Create Data</h2>
            
        </div>
        <form className="p-4 bg-light rounded-bottom shadow "  onSubmit={handleSubmit}>
            <div className="mb-3 form-group ">
            <label htmlFor="name" className="form-label">
                Name
            </label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="mb-3 form-group">
            <label htmlFor="age" className="form-label">
                Age
            </label>
            <input type="number" className="form-control" id="age" placeholder="Enter your age" onChange={(e) => setAge(e.target.value)} />
            </div>

            <div className="mb-3 form-group">
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            </div>
        </form>
        <div className="mt-2">
        <Link to={'/read'}> <button className="btn btn-warning btn-sm me-2">   Read  =  </button></Link>
        </div>

        </div>
    </div>
    </>
    )
}

export default CrudApp