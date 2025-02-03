import { useState } from "react"


function MultipleInputinfun_comp() {
    const [data, setData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const new_value = (e.target.name === 'email') ? value.toLowerCase() : value;
        setData((prev) => {
                return {
                    ...prev, [name]: new_value
                }
        }); 
        console.log(value + " => " + name)
    }
    
    return (
            <div>
                <form>
                    <label htmlFor="">Enter Your Name: </label>
                    <input type="text" name="name" value={data.name}  onChange={handleChange}/>
                    <br />
                    <br />
                    <label htmlFor="">Enter Your Email: </label>
                    <input type="email" name="email" value={data.email}  onChange={handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
    )
}

export default MultipleInputinfun_comp