import { useState } from "react";


function MultipleCheckBoxes() {
const [fruites, setFruites] = useState([]); 
    const handleChange = (e) => {
            const value = e.target.value;
            const checked = e.target.checked;
            console.log(value, checked);
            if (checked) {
                setFruites([
                    ...fruites, value
                ])
            } else {
                setFruites(fruites.filter((e) => (e !== value)));
                // setFruites(fruites.filter((e) => console.log("e => "+ e, "value => "+ value)));
            }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fruites);
    }

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Select Fruites: &nbsp;</label>

                    <input type="checkbox" name="fruite" value="Apple" onChange={handleChange} />
                    <label htmlFor="">&nbsp; Apple</label>

                    <input type="checkbox" name="fruite" value="Mango" onChange={handleChange} />
                    <label htmlFor="">&nbsp; Mango</label>

                    <input type="checkbox" name="fruite" value="Banana" onChange={handleChange} />
                    <label htmlFor="">&nbsp; Banana</label>

                    <input type="checkbox" name="fruite" value="Grapes" onChange={handleChange} />
                    <label htmlFor="">&nbsp; Grapes</label>
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
    )
}

export default MultipleCheckBoxes