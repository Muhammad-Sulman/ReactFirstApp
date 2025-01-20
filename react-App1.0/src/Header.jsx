


function Header(props) {
    return (
        console.log(props),
        // props.name = "new name",  throws error 
        
    <div>
            <h1>Header  hello {props.name} age: {props.age}</h1>
            {props.children}
    </div>
    );
}

export default Header;