// import './App.css';
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

import { createContext } from "react";
import Comp_A from "./comp_A";

// import UseEffectComp from "./UseEffectComp";

// import Arrayusestate from "./Arrayusestate";

// import Objusestate from "./Objusestate";
// import ClassState from "./ClassState";
// import FunctionalState from "./FunctionalState";
// import UsedstateComponent from "./UsedstateComponent";




// let a = "Hamza"
// const friends = ["Ali", "Hamza", "Muzamil", "Shah"];

// useContext hook
export const NameContext =  createContext();
export const Friend =  createContext();


function App() {
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
          <NameContext.Provider  value={"Suleman"}>
            <Friend.Provider value={"Muzamil"}>
            <Comp_A></Comp_A>
            </Friend.Provider>
          </NameContext.Provider>



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
