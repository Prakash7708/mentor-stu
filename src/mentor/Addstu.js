import React from 'react';
import {useState,useEffect}from 'react';
import axios from '../axios';
import {Link,useParams}from "react-router-dom";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{useFormik} from 'formik';
import { useNavigate } from 'react-router-dom';

function Addstu() {
  
    let navigate=useNavigate();
  const [users,setUsers]=useState([]);
  let params=useParams();
//   console.log(params.id)
//   let mname=params.id
 
   
          
// let Addstu1= async (id)=>{
//             try{ 
//                let values={id}
//                //let id=`${params.id}`
//                await axios.put(`http://localhost:3001/asnstu/${params.id}`,values)
               
       
//                 }catch(error){
//                   alert("something went wrong")
//                }
//                navigate("/")
//            }
        
  
    
//   useEffect(()=>{
//     let fetchData= async()=>{
//       let userData= await axios.get(`http://localhost:3001/mentor/${params.id}`)
      
//       setUsers(userData.data)
//       //formik.setValues(userData.data)
//     }
//     fetchData()
//   },[])
 
useEffect(()=>{
    let fetchData= async()=>{
      // let userData= await axios.get("http://localhost:3001/mentoraddstu")
      let userData= await axios.get("/mentoraddstu")
      //console.log(userData.data)
      setUsers(userData.data)
      //formik.setValues(userData.data)
    }
    fetchData()
  },[])

  let Addstu1= async (id)=>{
    try{ 
       let values={id}
       //let id=`${params.id}`
      //  await axios.put(`http://localhost:3001/asnstu/${params.id}`,values)
      await axios.put(`/asnstu/${params.id}`,values)
       

        }catch(error){
         console.log(error)
       }
        navigate("/")
   }
//    navigate("/")
return (
    <>
   
    
    {/* Page Heading */}
    <h1 className="h3 mb-2 text-gray-800">Students without mentors</h1>
    <p className="mb-4">
      DataTables is a third party plugin that is used to generate the demo table
      below. For more information about DataTables, please visit the{" "}
      <a target="_blank" href="https://datatables.net">
        official DataTables documentation
      </a></p>
      <h5 to={'/CreateStudent'} className="d-none d-sm-inline-block  btn-primary shadow-sm">
        <i className="fas fa-download fa-sm text-white-50" /> Assign student for this mentor
      </h5>
  
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
                <th>Action</th>
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
              <button onClick={()=>Addstu1(input.name)} className='btn btn-outline-warning m-2'>Assign</button>
              
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

export default Addstu;