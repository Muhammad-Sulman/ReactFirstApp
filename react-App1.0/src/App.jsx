import './App.css'

let name = " Muhammad Suleman";
const car_obj = {name:"BMW", color:"Black", make:"2024"};
let a = 10;
let msg = "";
if(a> 5){
  msg = "hello suleman";
}else{
  msg = "bye suleman";
}


function App() {
  return (
    <>
      <h1>Hello World Iam {name}</h1>
      <h1>{5 + 5}</h1>
      <h1>{car_obj.name}</h1>
      <h2>{car_obj.color}</h2>
      <h2>{msg}</h2>
      <h2>{(a > 50) ? "iam ternar operator" : "iam flase result of ternary operator"}</h2>
    </>
  )
}

export default App
