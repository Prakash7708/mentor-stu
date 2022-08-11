import React from 'react'
import{useFormik} from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import {useState,useEffect}from 'react';
import axios from 'axios';

function Viewstudent() {
    let navigate=useNavigate();
    let [loading,setLoading]=useState(false);
     let params=useParams();
    // useEffect(()=>{
    //     let fetchData= async()=>{
    //       let userData= await axios.get(`https://62bc613c6b1401736cf94b10.mockapi.io/users${params.id}`)
    //       //setUsers(userData.data)
    //       formik.setValues(userData.data)
    //     }
    //     fetchData()
    //   },[])

    let formik=useFormik({
        initialValues:{
            name:"",
            mentor:"",
            age:"",
            mark:"",
            rank:"",
            subject:""
        },
        validate:(values)=>{
           let errors ={}
           //let pattern = new RegExp(/^[a-zZ-Z\-]+$)

           if(!values.name){
            errors.name="Enter valid name"
           }else if(values.name.length < 2){
                  errors.name="name is les than 5"
           }else if(values.name.length < 4){
            errors.name="name is to short "}
//      else if(pattern.test(formik.values.name)){
//         errors.name="uername invalid "
//  }
        //    if (!values.position){
        //     errors.position="Enter position"
        //    }
           return errors;  
        },
        onSubmit:async(values)=>{
             //console.log(values)
           
            navigate("/students")
        //  try{ 
        //       await axios.put(`https://62bc613c6b1401736cf94b10.mockapi.io/stu/${params.id}`,values)
        //       navigate("/students")
        //     //  setLoading(true)
        //     //  await axios.post("https://62bc613c6b1401736cf94b10.mockapi.io/users",values)
        //     // let data=await fetch("https://62bc613c6b1401736cf94b10.mockapi.io/users",{
        //     //  method:"POST",
        //     //  body:JSON.stringify(values) })

        //      }catch(error){
        //        alert("somthing went wrong")
        //     }
            
        }
    });
    useEffect(()=>{
        let fetchData= async()=>{
          let userData= await axios.get(`https://62bc613c6b1401736cf94b10.mockapi.io/stu/${params.id}`)
          //setUsers(userData.data)
          formik.setValues(userData.data)
        }
        fetchData()
      },[])

   

  return (
    <div className='container'>
        <h1>Read Only</h1>
        <form onSubmit={formik.handleSubmit}>
        <div className='row'>


            <div className='col-lg-6'>
             <label>Name</label>
             <input name="name" onChange={formik.handleChange} value={formik.values.name} type="text" className='form-control'/>
             {
                formik.errors.name? <div style={{color:'red'}}>{formik.errors.name}</div>:null
             }
             <label>Subject</label>
             <input name="subject" onChange={formik.handleChange} value={formik.values.subject} type="text" className='form-control'/>
             <label>Mark</label>
             <input name="mark" onChange={formik.handleChange} value={formik.values.mark} type="number" className='form-control'/>
             {/* {
                formik.isValid ?'true':'false'
             } */}
             
             <input type={'submit'} disabled={!formik.isValid} value="Back" className='btn btn-primary mt-2'/>
            </div>
            <div className='col-lg-6'>
            <label>Mentor</label>
            <input name="mentor" onChange={formik.handleChange} value={formik.values.mentor} type="text" className='form-control'/>
            {
                formik.errors.position? <div style={{color:'red'}}>{formik.errors.position}</div>:null
             }
             <label>Age</label>
             <input name="age" onChange={formik.handleChange} value={formik.values.age} type="text" className='form-control'/>
             <label>Rank</label>
             <input name="rank" onChange={formik.handleChange} value={formik.values.rank} type="text" className='form-control'/>

            </div>



        </div>

        </form>
    </div>
  )
}

export default Viewstudent;