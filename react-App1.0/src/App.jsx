import './App.css'
import Header from './Header.jsx'
// import Sidebar from './Sidebar.jsx'
// import Footer from './Footer.jsx'
// import House from './House.jsx'

// let a = "Hamza"
const friends = ["ali", "Hamza", "Muzamil", "Shah"]

function App() {
  return (
    <>
      
      <Header name="Suleman" age="abc" isMarried={false} arr={friends}/>
      {/* <House/> */}
      {/* <Sidebar name={a}  age = "22"></Sidebar> */}
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
