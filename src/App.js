import React from 'react'
import styled from 'styled-components'
import Navbar from "./components/Navbar"
import Postcard from './components/Postcard'
import Profile from './components/Profile'
import Stories from './components/Stories'

function App() {
  return (
    <>
      <Navbar />
      <MainStyled>
        <div className="main">
          <Stories />
          <Postcard />
          <Postcard />
          <Postcard />
          <Postcard />
          <Postcard />
          <Postcard />
          <Postcard />
        </div>
        <div className="profile">
        <Profile />
        </div>
        </MainStyled>
    </>
  )
}

export default App

const MainStyled = styled.div`
display: flex;
.main{
  width: 70vw;
  height: auto;
}
.profile{
  height: 100vh;
}
`