import React from 'react'
import{useFormik} from 'formik';
import { useNavigate } from 'react-router-dom';
import {useState}from 'react';
import axios from './axios';
function Createteacher() {
  
    let navigate=useNavigate();
    let [loading,setLoading]=useState([]);
    
    let formik=useFormik({
        initialValues:{
            name:"",
            position:"",
            age:"",
            subject:"",
            students:"",
            salary:"",
            asnstu:true,
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
             //console.log(values)
            // navigate("/Users");
         try{ 
            setLoading(true)
            // await axios.post("http://localhost:3001/mentor",values)
            await axios.post("/mentor",values)
            // let data=await fetch("https://62bc613c6b1401736cf94b10.mockapi.io/users",{
            //  method:"POST",
            //  body:JSON.stringify(values) })

             }catch(error){
               
            }
            navigate("/")
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
             <label>Students</label>
             <input name="students" onChange={formik.handleChange} value={formik.values.startDate} type="num" className='form-control'/>
             {/* {
                formik.isValid ?'true':'false'
             } */}
             
             <input type={'submit'} disabled={!formik.isValid} value="Done" className='btn btn-primary mt-2'/>
            </div>
            <div className='col-lg-6'>
            <label>Exprience</label>
            <input name="position" onChange={formik.handleChange} value={formik.values.position} type="text" className='form-control'/>
            {
                formik.errors.position? <div style={{color:'red'}}>{formik.errors.position}</div>:null
             }
             <label>Age</label>
             <input name="age" onChange={formik.handleChange} value={formik.values.age} type="text" className='form-control'/>
             <label>Salary</label>
             <input name="salary" onChange={formik.handleChange} value={formik.values.salary} type="text" className='form-control'/>

            </div>



        </div>

        </form>
    </div>
  )
}

export default Createteacher