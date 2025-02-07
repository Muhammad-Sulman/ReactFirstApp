import { useSearchParams } from "react-router-dom"


function Search() {
    const [searchParam, setSearchParams] = useSearchParams();

    const handleSearch = (e) => {
        e.preventDefault();
        const data = searchParam.get('q');
        const age = searchParam.get('age');
        // alert(data);
        alert(data +"  " + age);
    }
    return (
    <div><h1>Search</h1>
        <form  onSubmit={handleSearch}>
            <label htmlFor="">Search</label>&nbsp; &nbsp;
            <input type="text" onChange={(e) => setSearchParams({q: e.target.value})} />
            <br /><br />
            {/* <input type="submit" value="Submit" /> &nbsp; &nbsp; */}
            <button type="submit" >Submit</button> &nbsp; &nbsp;
            <button onClick={() => setSearchParams({})} >Reset</button> &nbsp; &nbsp;
            <button onClick={() => setSearchParams({q:"suleman", age:21})} >Reset</button><br />
        </form>
        <br />
    </div>
    )
}

export default Search