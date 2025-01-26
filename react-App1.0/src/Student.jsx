

function Student({std}) {  //destructuring props in std
    return (
        <div>
            <h1>Name: {std.name} Age: {std.age}</h1>
        </div>
    )
}

export default Student