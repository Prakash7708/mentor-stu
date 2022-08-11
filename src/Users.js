import React from 'react'
import {Link,useParams}from "react-router-dom";
import {useState,useEffect}from 'react';
import axios from 'axios';


function Users() {
  // const users=[{id:1,name:"person 1",position:"developer",office:"banglore",age:42,startdate:"25/04/2022",salary:40000},
  // {id:2,name:"person 2",position:"developer",office:"mumbai",age:42,startdate:"25/04/2022",salary:60000},
  // {id:3,name:"person 3",position:"developer",office:"chennai",age:42,startdate:"25/04/2022",salary:55000}]

    const [users,setUsers]=useState([]);
    let params=useParams();

    useEffect(()=>{
      
      fetchData()
    },[])

    let fetchData= async()=>{
      let userData= await axios.get("https://62bc613c6b1401736cf94b10.mockapi.io/users")
      
      setUsers(userData.data)
    }
    //console.log(users);

    let handleDelete= async (id)=>{
      let ask=window.confirm("Confirm to delete")
      if(ask){
           await axios.delete(`https://62bc613c6b1401736cf94b10.mockapi.io/users/${id}`)
      }
      fetchData();
  }
  return (
    <>
   
    
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo table
        below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a></p>
        <Link to={'Create'} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-download fa-sm text-white-50" /> Create User
        </Link>
    
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>action</th>
                </tr>
              </thead>
             
              <tbody>
                {users.map((input)=>{
                return ( <tr>
                <td>{input.name}</td>
                <td>{input.position}</td>
                <td>{input.office}</td>
                <td>{input.age}</td>
                <td>{input.startDate}</td>
                <td>{input.salary}</td>
                <Link className='btn btn-success mr-2' to={`view/${input.id}`}>View</Link>
                <Link className='btn btn-warning mr-2' to={`view/${input.id}`}>Edit</Link>
                <button onClick={()=>handleDelete(input.id)} className='btn btn-danger' >Delete</button>
                
              </tr>)
               })} 
               
              
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
   
  </>
  
    
         
  )
}

export default Users;