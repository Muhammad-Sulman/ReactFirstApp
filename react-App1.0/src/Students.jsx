import Student from './Student';

function Students() {
    // const friends = ['Suleman', 'Muzamil', 'Aqib', 'Hammad']
    // const numbers = [1,2,3,4,5,6]
    // const result = numbers.map( num => <h1> {num = num * 2}</h1>);

    // const students = [
    //     {
    //         name: "Suleman",
    //         age: 21
    //     },
    //     {
    //         name: "shah",
    //         age: 19
    //     },
    //     {
    //         name: "Muzamil",
    //         age: 20
    //     },
    //     {
    //         name: "Ali Hamza",
    //         age: 27
    //     },
    // ]

    const students = [
        {
            id: 1,
            name: "Suleman",
            age: 21
        },
        {
            id: 2,
            name: "shah",
            age: 19
        },
        {
            id: 3,
            name: "Muzamil",
            age: 20
        },
        {
            id: 4,
            name: "Ali Hamza",
            age: 27
        },
    ]


    return (
        <div>
            {/* {friends.map(fri => <h1> {fri} </h1>)} */}
            {/* {numbers.map( (num, index ) => <h1 key={index}> {num = num * 2}</h1>)} */}
            {/* {result} */}
            {/* {students.map(std => <h1>Name: {std.name} Age: {std.age}</h1>)} */}
            {/* {students.map(std => <Student  std = {std}/>)} */}
            {students.map(std => <Student key={std.id} std = {std}/>)}
        </div>
    )
}

export default Students