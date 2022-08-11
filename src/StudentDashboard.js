import React from 'react';
import {useState,useEffect}from 'react';
import axios from './axios';
import {Link,useParams}from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{useFormik} from 'formik';


function StudentDashboard() {
  
    // const users=[{id:1,name:"person 1",position:"developer",office:"banglore",age:42,startdate:"25/04/2022",salary:40000},
  // {id:2,name:"person 2",position:"developer",office:"mumbai",age:42,startdate:"25/04/2022",salary:60000},
  // {id:3,name:"person 3",position:"developer",office:"chennai",age:42,startdate:"25/04/2022",salary:55000}]

  const [users,setUsers]=useState([]);
  let params=useParams();

  useEffect(()=>{
    
    fetchData()
  },[])

  let fetchData= async()=>{
    // let userData= await axios.get("http://localhost:3001/student")
    let userData= await axios.get("/student")
   // console.log(userData.data)
    setUsers(userData.data)
  }
  //console.log(users);
  let handleDelete= async (id)=>{
    let ask=window.confirm("Confirm to delete")
    if(ask){
      // await axios.delete(`http://localhost:3001/studentdel/${id}`)
      await axios.delete(`/studentdel/${id}`)
    }
    fetchData();
}
  // useEffect(()=>{
  //   let fetchData= async()=>{
  //     let userData= await axios.get(`https://62bc613c6b1401736cf94b10.mockapi.io/stu/${params.id}`)
  //     //setUsers(userData.data)
  //     formik.setValues(userData.data)
  //   }
  //   fetchData()
  // },[])
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
      <Link to={'/CreateStudent'} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <i className="fas fa-download fa-sm text-white-50" /> Add Student
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
                <th>Mentor</th>
                <th>Subject</th>
                <th>Age</th>
                <th>Mark</th>
                <th>Rank</th>
                <th>Action delete</th>
               </tr>
              </thead>
           
             <tbody>
              {users.map((input)=>{
              return ( <tr className="table-bordered">
              <td>{input.name}</td>
              <td>{input.mentor}</td>
              <td>{input.subject}</td>
              <td>{input.age}</td>
              <td>{input.mark}</td>
              <td>{input.rank}</td>
              <Link className='btn btn-outline-primary mr-2' to={`/Changemen/${input.name}`}>Chang mentor</Link>
              
              <button onClick={()=>handleDelete(input._id)} className='btn btn-outline-danger' >Delete</button>
              
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

export default StudentDashboard;