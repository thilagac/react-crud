import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Create() {
  const[value,setValue]=useState({
    name:"",
    email:"",
    phone:""

  })
  const navigate=useNavigate();
  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post(' http://localhost:3000/users',value)
           .then(res=>{
            console.log(res)
            navigate('/')
           })
           .catch(err=> console.log(err));
  }
  return (
    <div className='d-flex w-100 justify-content-center align-items-center bg-light vh-100'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add A User</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className='form-control' placeholder='Enter Name'
            onChange={e=>setValue({...value,name:e.target.value})}/>

          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input type="email" name="name" className='form-control' placeholder='Enter Email'
             onChange={e=>setValue({...value,email:e.target.value})}/>
            
          </div>
          <div className='mb-3'>
            <label htmlFor="email ">Phone:</label>
            <input type="text" name="name" className='form-control' placeholder='Enter phoneNo'
             onChange={e=>setValue({...value,phone:e.target.value})}/>
            
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to="/" className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
 
      
    </div>
  )
}

export default Create
