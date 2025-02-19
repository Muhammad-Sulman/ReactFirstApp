import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
// import './index.css'
import App from './App.jsx'
// import User from './User.jsx'

// import Header from './Header.jsx'
// import Sidebar from './Sidebar.jsx'
// import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* <User/> */}

    {/* <Header></Header>
      <Sidebar/>
      <Footer></Footer> */}
  </StrictMode>,
)
