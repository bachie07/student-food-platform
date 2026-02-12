import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUpForm(){

    const { register, handleSubmit, formState: {errors}} = useForm(); // create useForm constant 
    
    function onSubmit(data){

        alert(`submmited with email" ${data.email} "and password: ${data.password}`)

    }


    return( 

        <div className="max-w-md mx-auto"> 

        <h1> Sign Up</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}> 
            
            <div style={{ marginBottom: "1rem"}}>

                <label> 
                    Email
                <input 
                type="email"  
                placeholder="you@example.com" 
                {...register("email", {
                    
                    required: " Email is required "
                }
                )} // register implementation
                />
                </label>

                {errors.email && (
                    <p>{errors.email.message}</p>
                )}


            </div>

            <div style={{ marginBottom: "1rem "}}>

                <label>
                    Password
                </label>
                <input type="password" 
                placeholder="......" 
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 4,
                        message: "Password must be at least 4 chars"
                    },
                    maxLength: {
                        value: 12,
                        message: "Password must be at most 12 chars"
                    }
                })}
                />

                {errors.password && (
                    <p>{errors.password.message}</p>
                )}


            </div>

            <button type="submit"> Create Account</button>

        </form>


        </div>


)}

