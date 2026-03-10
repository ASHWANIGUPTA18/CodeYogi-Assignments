import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "./loginSchema";

function SignUp(){

  const formik=useFormik(
    {
        initialValues:{
            name:"",
            email:"",
            password:"",
        },
        validationSchema:loginSchema,
        onSubmit:((values)=>{
            console.log("SignUp Data:",values);
        })

    }
  )
  



    return(
        <div className="flex flex-col items-center justify-center w-full bg-gray-100 h-screen">
            <form action="" className="flex flex-col  bg-white p-6 rounded-md shadow-md w-96">
       <h1 className="text-3xl">SignUp Page</h1>
       <label htmlFor="name">Name</label>
       <input type="text" id="formik.name" name="formik.name" className="border border-black m-2" />
       <label htmlFor="email">Email</label>
       <input type="text" id="email" name="email" className="border border-black m-2" />
         <label htmlFor="password">Password</label>
         <input type="password" id="password" name="password" className="border border-black m-2" />
         <button>Sign Up</button>
            </form>
        </div>
    )
}
export default SignUp;