import React from 'react'
import { Link } from 'react-router-dom'


function Update() {
  return (
    <div className='d-flex vh-100 bg-info p-3 justify-content-center align-items-center'>
    <div className='w-75 rounded bg-white p-4'>
    <Link className='btn btn-primary' to='/'>Home</Link>
  <form action="/action_page.php">
  <div class="mb-3 mt-3">
    <label className="form-label">Name:</label>
    <input type="text" className="form-control" value='Sofik' id="name" name="name" />
  </div>
  <div class="mb-3">
    <label className="form-label">Email:</label>
    <input type="email" className="form-control" value='sofik@gmail.com' id="email"  name="email" />
  </div>

  <div class="mb-3">
    <label className="form-label">Contact:</label>
    <input type="text" className="form-control" value='+91-23456789878' id="contact" name="contact" />
  </div>

  <div class="mb-3">
    <label className="form-label">Age:</label>
    <input type="number" className="form-control" value='26' id="age" name="age" />
  </div>
  
  <button type="submit" className="btn btn-primary">Update</button>
</form>
    </div>
</div>
  )
}

export default Update