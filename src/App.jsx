import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Shopping from './Shopping'
import Water from './Water'
import Posts from './Posts'
import Api from './Api'
import Friends from './Friends'
import PracticeApi from './PracticeAPi';
import Albums from './Albums'
import Photos from './Photos'
import ShowText from './ShowText';
import Users from './Users'

const userAPI = fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json());

const photosApi = fetch('https://jsonplaceholder.typicode.com/photos').then((res)=>res.json())
const albumApi = fetch('https://jsonplaceholder.typicode.com/albums')
.then((res)=>res.json());

const fetchAPI = fetch('https://api.escuelajs.co/api/v1/users')
.then((res)=>res.json())

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())

const PostApi = fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>res.json());

const fetchFriends = async () =>{
  const res = await fetch('https://api.escuelajs.co/api/v1/users');
  return res.json();
}  
function App() {

  const friendsPromise = fetchFriends();

  function handleClick() {
    alert('i am clicked!!')
  }
  const handleClick2 = () => {
    alert('Clicked 2');
  }
  const addNumber = (num) => {
    alert(num + 10);
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

          <Suspense fallback={<h3>User info loading..</h3>}>
            <Users userAPI = {userAPI}></Users>
          </Suspense>  
          <ShowText></ShowText>

          {/* <Suspense fallback={<h3>Photos loading please wait..</h3>}>
            <Photos photosApi={photosApi}></Photos>
          </Suspense> */}

          {/* <Suspense fallback={<h3>Albums Loading...</h3>}>
            <Albums albumApi = {albumApi}></Albums>
          </Suspense> */}
          {/* <Suspense fallback={<h3>Wait until loading posts...</h3>}>
            <Posts PostApi = {PostApi}></Posts>
          </Suspense> */}

          {/* <Suspense fallback={<h3>Please wait a second user id is loading...</h3>}>
            <PracticeApi fetchAPI = {fetchAPI}></PracticeApi>
          </Suspense> */}
          {/* <Suspense fallback={<h3>waiting for message.........</h3>}>
            <Api fetchUsers={fetchUsers}></Api>
          </Suspense> */}
{/* 
          <Suspense fallback={<h3>Friends are coming for treat....</h3>}>
              <Friends friendsPromise = {friendsPromise}></Friends>
          </Suspense>  */}
          <Batsman></Batsman>
          <button style={{ marginRight: '20px' }} onClick={handleClick}>Click me</button>
          <button onClick={handleClick2}>Click me</button>
          <button style={{ marginLeft: '20px' }} onClick={() => addNumber(10)}>Click me to add number</button>
          <Counter></Counter>
          <Shopping></Shopping>
          <Water></Water>
        </div>
      </section>
    </>
  )
}

export default App
