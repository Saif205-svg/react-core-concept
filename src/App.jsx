import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Shopping from './Shopping'
import Water from './Water'

function App() {
  function handleClick(){
    alert('i am clicked!!')
  }
  const handleClick2 = ()=>{
    alert('Clicked 2');
  }
  const addNumber =(num)=>{
    alert(num+10);
  }
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <Batsman></Batsman>
          <button style={{marginRight: '20px'}} onClick={handleClick}>Click me</button>
          <button onClick={handleClick2}>Click me</button>
          <button style={{marginLeft:'20px'}} onClick={()=> addNumber(10)}>Click me to add number</button>
          <Counter></Counter>
          <Shopping></Shopping>
          <Water></Water>
        </div>
      </section>
    </>
  )
}

export default App
