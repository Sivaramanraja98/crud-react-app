import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container'>
        <Header heading="REACT DIRECTORY APP"/>
        <div className=' row box'>
         <Link to ='/user'>
            <button className='btn '>VIEW USER</button>
         </Link>
         <Link to ='/add'>
            <button className='btn '>ADD USER</button>
         </Link>

        </div>
    </div>
  )
}

export default Home;