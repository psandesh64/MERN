import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header = (props) => {
  return <h1>{props.name}</h1>
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.excercises}</p>
}

const Content = (props) => {
  return props.parts.map(p => <Part part={p}/>);
}

// const Total = (props) => {
//   var total = 0;
//   props.parts.forEach(val => total+=val.excercises);
//   return <p>Total: {total}</p>
// }
const Total = (props) => {
  var total = props.parts.reduce((accumulator,initValue)=>accumulator+initValue.excercises,0);
  return <p>Total: {total}</p>
}

const App = () => {
  const course = 'Half Stack Program'
  const part1 = {
    'name': 'Fundamentals of React',
    'excercises': 10
  }
  const part2 = {
    'name': 'Fundamentals of React',
    'excercises': 20
  }
  return (
    <div>
      <Header name={course} />
      <Content parts={[part1, part2]} />
      <Total parts={[part1, part2]}/>
    </div>
  )
}

export default App