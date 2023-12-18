import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
// }
// const App = () => {
//   const a= 5;
//   const b= 8;
//   console.log(`Sum = ${a} + ${b} = ${a+b}`);
//   return (<h1>Hello</h1>)
// }
const App = () => {
  const date = new Date();
  let x = 1;
  let y = 6;
  const name = 'GIigi'
  const age = 26
  return (
    <div>
      <h1>Hello World</h1>
      <p>Sum of {x} and {y} is {x+y}</p>
      <p>Current time is {date.toLocaleTimeString()}</p>
      <Hello name='sandesh' age='28'/>
      <Hello name={name} age={age}/>
      <Hello name='ram'/>
      <Hello name='shyam'/>
    </div>
  )
}
// const Hello = () => {
//   return(
//     <div>
//       <p>Hello country</p>
//     </div>
//   )
// }
const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}
export default App

// const part1 = 'Fundamental of React'
//   const exercise1 = 10
//   const part2 = 'Using props to pass data'
//   const exercise2 = 7
//   const part3 = 'State of component'
//   const exercise3 = 14
//   return(
//     <div>
//       {/* <h1>{course}</h1>
//       <p>{part1}{exercise1}</p>
//       <h1>{course}</h1>
//       <p>{part2}{exercise2}</p>
//       <h1>{course}</h1>
//       <p>{part3}{exercise3}</p>
//       <p>Number of exercises {exercise1 + exercise2 + exercise3}</p><h1>{course}</h1> */}
//       <Short part={part1} exercise={exercise1}/>
//       <Short part={part1} exercise={exercise1}/>
//       <Short part={part1} exercise={exercise1}/>

//       <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
//     </div>
//   )
// }

// function App() {
// }
// const App = () => {
//   const a= 5;
//   const b= 8;
//   console.log(`Sum = ${a} + ${b} = ${a+b}`);
//   return (<h1>Hello</h1>)
// }
// const App = () => {
  // const course = 'Half Stack Application Development'
  // const parts = [{
  //   name: 'Fundamental of React',
  //   exercises : 10
  // },
  // {
  //   name: 'Using props to pass data',
  //   exercises : 7
  // },
  // {
  //   name: 'State of a component',
  //   exercises : 14
  // }
  // ]
//   const course = {
//     name : 'Half Stack Application Development',
//     parts : [
//               {
//               name: 'Fundamental of React',
//               exercises : 10
//               },
//               {
//               name: 'Using props to pass data',
//               exercises : 7
//               },
//               {
//               name: 'State of a component',
//               exercises : 14
//               }
//             ]
//   }
//   return(
//     <div>
//       <Header course={course.name}/>
//       {/* <Content parts={[part1,part2,part3]}/> */}
//       <Content parts={course.parts}/>
//       <Total parts={course.parts}/>
//     </div>
//   )
// }

// const Header = (props) => {
 
//   return(
//     <div>
//       <h4>Course = {props.course}</h4>
//     </div>
//   )
// }
// const Content = (props) => {
//   // const part1 = 'Fundamental of React'
//   // const part2 = 'Using props to pass data'
//   // const part3 = 'State of component'
 
//   return(
//     <div>
//       <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
//       <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
//       <Part part={props.parts[1].name} exercise={props.parts[2].exercises}/>
//     </div>
//   )
// }
// const Total = (props) => {
 
//   return(
//     <div>
//       <h4>Total Here = {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</h4>
//     </div>
//   )
// }

// const Part = (props) => {
//   return(
//     <div>
//       <p>{props.part},{props.exercise}</p>
//     </div>
//   )
// }
// export default App

