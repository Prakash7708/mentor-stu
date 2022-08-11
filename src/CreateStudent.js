import React from 'react'
import{useFormik} from 'formik';
import { useNavigate } from 'react-router-dom';
import {useState}from 'react';
import axios from './axios';
function CreateStudent() {
  
    let navigate=useNavigate();
    let [loading,setLoading]=useState([]);
    
    let formik=useFormik({
        initialValues:{
            name:"",
            mentor:"",
            age:"",
            mark:"",
            rank:"",
            subject:"",
            asnmen:true,
        },
        validate:(values)=>{
           let errors ={}
           //let pattern = new RegExp(/^[a-zZ-Z\-]+$)

        //    if(!values.name){
        //     errors.name="Enter valid name"
        //    }else if(values.name.length < 5){
        //           errors.name="name is les than 5"
        //    }else if(values.name.length < 15){
        //     errors.name="name is to short "}
//      else if(pattern.test(formik.values.name)){
//         errors.name="uername invalid "
//  }
        //    if (!values.position){
        //     errors.position="Enter position"
        //    }
           return errors;  
        },
        onSubmit:async (values)=>{
             console.log(values)
            // navigate("/Users");
         try{ 
            setLoading(true)
            // await axios.post("http://localhost:3001/student",values)
            await axios.post("/student",values)
            // let data=await fetch("https://62bc613c6b1401736cf94b10.mockapi.io/users",{
            //  method:"POST",
            //  body:JSON.stringify(values) })

             }catch(error){
               
            }
            navigate("/students")
        }
    });


  return (
    <div className='container'>
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
             <input name="mark" onChange={formik.handleChange} value={formik.values.mark} type="num" className='form-control'/>
             {/* {
                formik.isValid ?'true':'false'
             } */}
             
             <input type={'submit'} disabled={!formik.isValid} value="Done" className='btn btn-primary mt-2'/>
            </div>
            <div className='col-lg-6'>
            <label>Mentor</label>
            <input name="mentor" onChange={formik.handleChange} value={formik.values.mentor} type="text" className='form-control'/>
            {
                formik.errors.position? <div style={{color:'red'}}>{formik.errors.position}</div>:null
             }
             <label>Age</label>
             <input name="age" onChange={formik.handleChange} value={formik.values.age} type="number" className='form-control'/>
             <label>Rank</label>
             <input name="rank" onChange={formik.handleChange} value={formik.values.rank} type="number" className='form-control'/>

            </div>



        </div>

        </form>
    </div>
  )
}

export default CreateStudent;