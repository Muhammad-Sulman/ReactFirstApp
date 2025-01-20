import './App.css'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'
import House from './House.jsx'

let a = "Hamza"

function App() {
  return (
    <>
      <Header name="Suleman" age="21">
        <p>hey iam children</p>
      </Header>
      <House/>
      <Sidebar name={a}  age = "22"></Sidebar>
      <Footer></Footer>
    </>
  )
}

export default App
