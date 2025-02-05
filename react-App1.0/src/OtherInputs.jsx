import { useState } from "react"


function OtherInputs() {

    let [textArea, setTextArea] = useState("");
    let [selectMenu, setSelectMenu] = useState("Pakistan");
    let [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Comments: ", e.target[0].value);
        console.log("Select Country: ", e.target[1].value);
        console.log("Check: ", e.target[2].checked);
    }

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="" style={{verticalAlign:"top"}}>Comments: &nbsp; </label>
                    <textarea  cols="50" rows="5" value={textArea} onChange={(e) => setTextArea(e.target.value)}></textarea>
                    <br /><br />
                    <label htmlFor="">Select Country: &nbsp;</label>
                    <select  value={selectMenu}  onChange={(e) => setSelectMenu(e.target.value)}>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                        <option value="Pakistan">Pakistan</option>
                    </select>
                    <br /><br />
                    <label htmlFor="">I accepted all the term: &nbsp; </label>
                    <input type="checkbox"   value={checked}  onChange={(e) => setChecked(e.target.checked)} />
                    <br /><br />
                    <input type="submit" value="submit" />
                </form>
            </div>
    )
}

export default OtherInputs