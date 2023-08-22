// import React, { useState } from "react";
// import SMButton  from "./Components/SMButton";
// import SMCard from "./Components/SMCard";
// import SMSelect from "./Components/SMSelect";
// import SMTable from "./Components/SMTable";
// import SMInput  from "./Components/SMInput";

// function App() {
    //   let testing = () => {
//     console.log("Testing");
//   };

//   let users = [
    //     {
//       id: 1,
//       name: "ABC",
//       age: 18,
//       isActive: true,
//     },
//     {
    //       id: 2,
    //       name: "JKL",
//       age: 18,
//       isActive: true,
//     },
//     {
    //       id: 3,
    //       name: "TYU",
//       age: 18,
//       isActive: true,
//     },
//     {
//       id: 4,
//       name: "OPO",
//       age: 18,
//       isActive: true,
//     },
//   ];

//   return (
//     <>
//       <div>
//         <h1>Components</h1>
//         {users.map((x, i) => {
//           return (
//             <SMCard id={x.id} name={x.name} age={x.age} isActive={x.isActive} />
//           );
//         })}
//       </div>
//     </>
//   );
// }


// BUTTON COMPONENT

// let add = ()=>{
    //   console.log('Task Added');
    // }
    // let del = ()=>{
        //   console.log('Task Deleted');
        // }
        // function App(){
//  return (
    //   <>
    //     <div>
//      <h1>HEllO WORLD</h1>
//       <SMButton buttonClick = {add} val = "Add Task"/>
//       <SMButton buttonClick = {del} val = "Del Task"/>
// </div>
// </>
// )}

// INPUT COMPONENT


// let func = ()=>{
//     console.log("Hello World");
// }
// function App(){
//     return <>
//         <SMInput inpType = "text" inpChange = {func} inpPlaceholder = "Enter Anything"/>
//         <SMInput inpType = "password" value = {inpVal}/>
//         <SMInput inpType = "file" />
   
    
//     </>
// }


// CARD COMPONENT
// let studentData = [{
//   id:1,
//   name: 'Muneim',
//   fatherName: 'Asif',
//   education: 'Inter',
//   isApproved: true,
// },
//   {id:2,
//   name: 'Danyal',
//   fatherName: 'Kareem',
//   education: 'Graduate',
//   isApproved: true,
// },  
//   {id:1,
//   name: 'Fahad',
//   fatherName: 'Jamil',
//   education: 'Inter',
//   isApproved: false,
// },
// ]
// function App(){
// return (
//   studentData.map((x,i)=>
//    <SMCard key = {i} studentId = {x.id} studentName = {x.name} studentFname = {x.fatherName} studentEdu = {x.education} studentIsApproved = {x.isApproved}/>)
// )
// }


// SELECT COMPONENT

// let mobile = [
//     {
//         RAM: '3GB',
//         ROM: '32GB'

//     },

//     {

//         RAM: '6GB',
//         ROM: '128GB'

//     },

//     {
//         RAM: '4GB',
//         ROM: '64GB'
//     }
//     ,

// ]

// let changeSelect = ()=>{
//     alert ('Model Changed')
// }
// function App() {
//     return (
//         mobile.map((x, i) => {
//          return  <> 
//           <SMSelect key={i} selectChange = {changeSelect} val1={x.RAM} val2={x.ROM} />
//          </>
//         })
//     )
// }


// TABLE COMPONENT

// TABLE COMPONENT
// function App (){

//   let tableData = [
//     {
//       id:1,
//       name : 'Hussain',
//       fName: 'Aftab',
//       class:10,
//       idCard:true
//     },

//     {
//       id:2,
//       name : 'Hassan',
//       fName: 'Aftab',
//       class:10,
//       idCard:true
//     },

//     {
//       id:3,
//       name : 'Hasnain',
//       fName: 'Aftab',
//       class:10,
//       idCard:false
//     },

//   ]


//   return (
//     tableData.map((x,i)=>{
//       return (
//       <SMTable key={i} name = {x.name} class = {x.class} fName = {x.fName} id = {x.id} idCard = {x.idCard}/>
//     )})
//   )
// }







// export default App;
