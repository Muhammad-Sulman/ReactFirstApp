import './App.css';
// import { Routes, Route, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Contact from './components/Contact';
// import About from './components/About';
// import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
// import Products from './components/Products';
// import Shirts from './components/Shirts';
// import Jeans from './components/Jeans';
// import Users from './components/Users';
// import UserDetialPage from './components/UserDetialPage';
// import Admin from './components/Admin';
import Search from './components/Search';
import LazyLoading from './components/LazyLoading';
import Validation from './Validation';
import FormikForm from './components/FormikForm';
import FormikForm2 from './components/FormikForm2';
// import ReactBS from './components/ReactBS';
import ImagesDemo from './components/ImagesDemo';
import ReducesHook from './components/ReducesHook';
import FetchApi from './components/FetchApi';
// import UseRefHook_Comp from './UseRefHook_Comp';
// import CallBackRef_Comp from './CallBackRef_Comp';
// import UnControlled_Comp from './UnControlled_Comp';
// import Stylesheet1 from './Stylesheet1';
// import Stylesheet2 from './Stylesheet2';
// import Externalcss from './Externalcss';
// import Students from './Students';
// import Component1 from './Component1';
// import Component2 from './Component2';
// import ParentComponent from './ParentComponent';
// import Header from './Header.jsx';
// import Sidebar from './Sidebar.jsx'
// import Footer from './Footer.jsx'
// import House from './House.jsx'
// import Employee from './Employee'
// import Customer from './Customer'
// import Clickfunction from './Clickfunction'
// import EventBinding from './EventBinding'
// import Mounting from './Mounting'
// import Updating1 from './Updating1';
// import Person2 from './Person2';
// import Parentclass from './Parentclass';
// import StylingComponent from './StylingComponent';
// import BsComponent from './BsComponent';

// import Refs from "./Refs";

// import MultipleCheckBoxes from "./MultipleCheckBoxes";

// import OtherInputs from "./OtherInputs";

// import MultipleInputinfun_comp from "./MultipleInputinfun_comp";

// import MultipleInput from "./MultipleInput";

// import ControlledFunction from "./ControlledFunction";

// import ControlledComp from "./ControlledComp";

// import { createContext } from "react";
// import Comp_A from "./comp_A";

// import UseEffectComp from "./UseEffectComp";

// import Arrayusestate from "./Arrayusestate";

// import Objusestate from "./Objusestate";
// import ClassState from "./ClassState";
// import FunctionalState from "./FunctionalState";
// import UsedstateComponent from "./UsedstateComponent";




// let a = "Hamza"
// const friends = ["Ali", "Hamza", "Muzamil", "Shah"];

// useContext hook
// export const NameContext =  createContext();
// export const Friend =  createContext();


function App() {

// const navigate = useNavigate();

// const navigateToAbout = () => {
//   navigate('/About');
// }

// const navigateTo = (url) => {
//   navigate(url);
// }

// const navigateToWhere = () => {
//   let name = 'suleman';
//   if(name == 'suleman'){
//     navigate('/About');
//   }else{
//     navigate('/Contact');
//   }
// }

    return (
  //   // console.error(),
      <>
       {/* <Header name="Suleman" age="asd" isMarried={false} arr={friends} /> */}
       {/* <House/> */}
       {/* <Sidebar name={a} age="22"></Sidebar> */}
       {/* <Footer name2 = {123}></Footer> */}
       {/* <Employee name = "Suleman.." age={21} ></Employee> */}
       {/* <Customer name="suleman.." age = {21} ></Customer> */}
       {/* <Customer></Customer> */}
       {/* <Clickfunction name="Suleman" ></Clickfunction> */}
       {/* <EventBinding></EventBinding> */}
       {/* <Mounting/> */}
       {/* <Updating1></Updating1> */}
       {/* <Person2 city= "Islamabad" ></Person2> */}
       {/* <Parentclass></Parentclass> */}
       {/* <ParentComponent></ParentComponent> */}
          {/* <Students></Students> */}
          {/* <StylingComponent></StylingComponent> */}
          {/* <Externalcss check={true}></Externalcss> */}
          {/* <Stylesheet2></Stylesheet2>
          <Stylesheet1></Stylesheet1> */}
          {/* <BsComponent></BsComponent> */}
          {/* <UsedstateComponent></UsedstateComponent> */}
          {/* <Objusestate></Objusestate> */}
          {/* <Arrayusestate></Arrayusestate> */}
          {/* <ClassState></ClassState>
          <FunctionalState></FunctionalState> */}
          {/* <UseEffectComp></UseEffectComp> */}
          {/* <NameContext.Provider  value={"Suleman"}>
            <Friend.Provider value={"Muzamil"}>
            <Comp_A></Comp_A>
            </Friend.Provider>
          </NameContext.Provider> */}
          {/* <ControlledComp></ControlledComp> */}
          {/* <ControlledFunction/> */}
          {/* <MultipleInput/> */}
          {/* <MultipleInputinfun_comp/> */}
          {/* <OtherInputs/> */}
          {/* <MultipleCheckBoxes/> */}
          {/* <Refs/> */}
          {/* <UnControlled_Comp/> */}
          {/* <CallBackRef_Comp/> */}
          {/* <UseRefHook_Comp/> */}
          {/* <NavBar/> */}
          <Routes>
            {/* <Route path='/' element={<Home/>} /> */}
            {/* <Route path='/products' element={<Products/>} >
            <Route index element={<Shirts/>} />
            <Route path='shirts' element={<Shirts/>} />
            <Route path='jeans' element={<Jeans/>}/>
            </Route> */}
            {/* <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} /> */}
            {/* <Route path='/users' element={<Users/>} /> */}
            {/* <Route path='/users/1' element={<UserDetialPage/>} />
            <Route path='/users/2' element={<UserDetialPage/>} />
            <Route path='/users/3' element={<UserDetialPage/>} /> */}
            {/* <Route path='/users/:id' element={<UserDetialPage/>} /> */}
            {/* <Route path='/users' element={<Users/>} >
            <Route path=':id' element={<UserDetialPage/>} />
            <Route path='admin' element={<Admin/>} />
            </Route> */}
    
            <Route path='/search' element={<Search/>} />
            <Route path= '/lazyloading' element={<LazyLoading/>} />
            <Route path= '/validation' element={<Validation/>} />
            <Route path='/formikform' element={<FormikForm/>} />
            <Route path='/formikform2' element={<FormikForm2/>} />
            {/* <Route path='/reactbs' element={<ReactBS />} /> */}
            <Route path='/imagesdemo' element={<ImagesDemo/>} />
            <Route path='/reducerhook' element={<ReducesHook/>} ></Route>
            <Route path='/fetchapi'   element={<FetchApi/> } ></Route>
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
          {/* <button type="button" onClick={() => navigate('/about')} >About</button> &nbsp; &nbsp;
          <button type="button" onClick={() => navigate('/Contact')} >Contact</button> */}

          {/* <button type="button" onClick={navigateToAbout} >About</button> &nbsp; &nbsp; */}
          {/* <button type="button" onClick={() => navigateTo('/contact')} >Contact</button> &nbsp; &nbsp;
          <button type="button" onClick={() => navigateTo('/about')} >About</button>&nbsp; &nbsp; */}

          {/* <button type="button" onClick={() => navigateToWhere()} >Click Me</button> */}
          {/* <button onClick={() => navigate(-1)} >Go Back</button> */}


      </>
    );

  // let name = "Suleman";
  // // let name = "Aqib";
  // let data ; // element vairable
  
  // if (name == "Suleman") {
  //   return <Component1></Component1>
  // } else {
  //   return <Component2></Component2>
  // }


// if (name == "Suleman") {
//     data = <Component1></Component1>
//   } else {
//     data =  <Component2></Component2>
//   }

// let name = "Suleman";
// let name = "Suleman1";

//   return (
//     <div>
//           {/* {data} */}
//           {/* {name == "Suleman"  && <Component1></Component1>} */}
//           {name == "Suleman" ? <Component1></Component1> : <Component2></Component2>}
//     </div>
//   )


}

export default App;
