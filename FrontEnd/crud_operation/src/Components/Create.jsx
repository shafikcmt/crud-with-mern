import React from 'react'
import { Link } from 'react-router-dom'

function Create() {
  return (
    <div className='d-flex vh-100 bg-info p-3 justify-content-center align-items-center'>
    <div className='w-75 rounded bg-white p-4'>
    <Link className='btn btn-primary' to='/'>Home</Link>
      
    </div>
</div>
  )
}

export default Create