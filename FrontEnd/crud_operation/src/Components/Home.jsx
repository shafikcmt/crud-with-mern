import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='d-flex vh-100 bg-info p-3 justify-content-center align-items-center'>
        <div className='w-75 rounded bg-white p-4'>
            
            <Link className='btn btn-primary' to='/create'>Add User</Link>
            <table className='table bordered table-hover'>
                <thead> 
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Contact</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sofik</td>
                        <td>M.Tech</td>
                        <td>+91-23456789</td>
                        <td>26</td>
                        <td>
                        <Link className='btn btn-primary' to='/update'>Edit</Link>
                        <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home