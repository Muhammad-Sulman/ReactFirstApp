import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function Read() {

    const [apiData, setApiData] =  useState([]);

    function handleDelete(id) {
        axios.delete(`https://67b6071807ba6e59083f7e1c.mockapi.io/crud/${id}`)
        .then(
            () => {
                getData();
            }
        ).catch((error) => {
            console.log(error);
        })
    }

    function getData() {
        axios.get("https://67b6071807ba6e59083f7e1c.mockapi.io/crud").then(
            (response) => {
                setApiData(response.data);
            }
        ).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    function setLocalStorage(id, name, age,email) {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
    }

    return (
        <div className="container mt-5">           
        <h2 className="text-center mb-2">User Data</h2>
        <div className="mb-2">
            <Link to={'/crudapp'}> <button className="btn btn-primary btn-sm me-2">Create User</button></Link>   
            </div>
        <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            
            {apiData.map((item) => {
                return ( 
                <>
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.e_name}</td>
                    <td>{item.e_age}</td>
                    <td>{item.e_email}</td>  
                    <td>
                        <Link to={'/edit'}>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => setLocalStorage(item.id, item.e_name, item.e_age, item.e_email) }> Edit </button></Link>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                                    if (window.confirm("Are you sure to delete the record?")) {
                                        handleDelete(item.id);
                                }
                            }}
                    >
                        Delete
                    </button>
                    </td>
                    </tr>
                </>
            )
    })
}
            </tbody>
        </table>
        </div>
    )
}

export default Read