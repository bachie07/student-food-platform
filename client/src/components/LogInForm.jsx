import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api"
import { useAuth } from "../context/AuthContext";

export default function LogInForm(){


    const { register, handleSubmit, formState: {errors}} = useForm(); // create useForm constant 

    const [loginError, setLoginError] = useState("")

    const { loginAction } = useAuth();
    
    async function onSubmit(data){

        try{

        setLoginError("")

        await loginAction(data)
    }

    catch(error){

        setLoginError(error.message)
    }

    }

    return( 

        <div className="w-full"> 

        <h1 className="mb-4 text-bold text-[25px]"> Log In into uniMunch</h1>

        {loginError && (
            <p className="text-red-600 mb-4 text-sm">
                {loginError}
            </p>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)}> 
            
            <div className="mb-2 w-full min-w-[200px]">

                <label> 
                    Email
                <input 
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-lg px-4 py-5 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow" 
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

            <div className="mb-5">

                <label>
                    Password
                </label>
                <input 
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-lg px-5 py-5 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow mb-5" 

                type="password" 
                placeholder="......" 
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 4,
                        message: "Password must be at least 4 chars"
                    },
                    maxLength: {
                        value: 20,
                        message: "Password must be at most 12 chars"
                    }
                })}
                />

                {errors.password && (
                    <p>{errors.password.message}</p>
                )}


            </div>

            <button type="submit" className="px-10 py-5 font-bold text-white rounded-full bg-red-900 hover:bg-red-700 transition-all w-full"> Log In</button>

        </form>


        </div>


)}

