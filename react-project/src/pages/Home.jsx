import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div>This is HomePage</div>
      <Link to='/blog'>Home</Link>

    </>
  )
}

export default Home