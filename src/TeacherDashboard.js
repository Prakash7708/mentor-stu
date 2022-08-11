import React from 'react';
import {useState,useEffect}from 'react';
import axios from './axios';
import {Link,useParams}from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function TeacherDashboard() {
  
    // const users=[{id:1,name:"person 1",position:"developer",office:"banglore",age:42,startdate:"25/04/2022",salary:40000},
  // {id:2,name:"person 2",position:"developer",office:"mumbai",age:42,startdate:"25/04/2022",salary:60000},
  // {id:3,name:"person 3",position:"developer",office:"chennai",age:42,startdate:"25/04/2022",salary:55000}]

  const [users,setUsers]=useState([]);
 // console.log(users.age)
  let params=useParams();

  useEffect(()=>{
    
    
     fetchData()
  },[])

  let fetchData= async()=>{
    // let userData= await axios.get("http://localhost:3001/mentor")
    let userData= await axios.get("/mentor")
     
    // let men=await mentors.json()
    //let mentors1= await userData.data
    //delete userData.data._id
   console.log(userData.data)
   //console.log(mentors.age)
    setUsers(userData.data)
  }
  //console.log(users);

  let handleDelete= async (id)=>{
    let ask=window.confirm("If you delete this need change mentor students")
    if(ask){
        //  await axios.delete(`http://localhost:3001/mentordel/${id}`)
        await axios.delete(`/mentordel/${id}`)
    }
    fetchData();
}
return (
    <>
   
    
   
    <h1 className="h3 mb-2 text-gray-800">Tables</h1>
    <p className="mb-4">
      DataTables is a third party plugin that is used to generate the demo table
      below. For more information about DataTables, please visit the{" "}
      <a target="_blank" href="https://datatables.net">
        official DataTables documentation
      </a></p>
      <Link to={'/CreateTeacher'} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <i className="fas fa-download fa-sm text-white-50" /> Add Mentor
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
            <thead className="table table-bordered">
              <tr>
                <th>Name</th>
                <th>Experience</th>
                <th>Subject</th>
                <th>Age</th>
                <th>Students</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead> 
            <tbody className="table-bordered">
           
               {users.map((input)=>{
              return ( <tr className="table-bordered">
              <td>{input.name}</td>
              <td>{input.position}</td>
              <td>{input.subject}</td>
              <td>{input.age}</td>
              <td>{input.students}</td>
              <td>{input.salary}</td>
              {/* <Link className='btn btn-outline-success' to={`Viewths/${input.id}`}>View</Link> */}
              <Link className='btn btn-outline-success' to={`Viewstu/${input.name}`}>View Assigned students</Link>
              <Link className='btn btn-outline-warning m-2' to={`Addstu/${input.name}`}>Add student</Link>
              <button onClick={()=>handleDelete(input._id)} className='btn btn-outline-danger'>Delete</button>
              
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

export default TeacherDashboard;