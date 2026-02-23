import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import { useState, useEffect} from 'react'
import { Search } from "lucide-react"

const Navbar = () => {

    const { user, token, logOut } = useAuth()

    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)


    }, []);



    return(

        <nav className={`sticky top-0 z-50 bg-red-800 text-white px-6 shadow-md transition-all duration-500 ${isScrolled ? "py-1" : "py-6"}`}>

                <div className="max-w-[1600px] mx-auto">

                    <div className={`flex items-center justify-between ${ isScrolled ? "mb-1" : "mb-5" }`}>

                        <div className="w-1/3"></div>

                        <Link to="/" className={`w-1/3 flex justify-center font-bold transition-all duration-500 font-serif ${ isScrolled ? "text-3xl" : "text-5xl"}`}>
                        uniMunch
                        </Link>

                    {!token ? (
                        <div className="w-1/3 flex justify-end">
                        <Link to="/login" className="ml-auto hover:text-gray-300 transition-colors text-[15px] mr-10">  Sign in </Link>
                        </div>
                    ) : ( 
                        <div className="w-1/3 flex justify-end">
                        <button onClick={logOut} className="rounded-full bg-white text-bold text-white text-center hover:bg-slate-200 transition-all">Logout</button>
                        </div>
                    )}

                    </div>

                    <hr className={`h-px bg-white border-0 transition-all duration-500 ${ isScrolled ? "my-4" : "my-7"}`}/>
                    
                    <div className="flex justify-between">

                        <div className="w-1/3 space-x-20 ml-10">

                            {/* Make sure to match the link address to the ones defined in app.jsx*/}

                            <Link to="/recipes" className="hover:text-gray-300 transition-colors  text-[20px] font-semibold"> Recipes </Link>

                            <Link to="/groceries" className="hover:text-gray-300 transition-colors  text-[20px] font-semibold "> Grocery </Link>

                            <Link to="/eats" className="hover:text-gray-300 transition-colors  text-[20px] font-semibold">  Eats </Link>

                            {token && ( 
                                <>
                                <Link to="/saved" className="hover:text-gray-300 transition-colors  text-[30px] font-semibold">Saved</Link>
                                <span> Hi, {user.username}!</span>
                                </>

                            )}
                        </div>
                        <div className="w-1/4 mr-5 relative">

                            <Search className="absolute left-3 top-1/3 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input className="w-full pl-10 bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-lg px-1 py-1 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow mb-5"/>

                        </div>


                    </div> 


            </div>

    
        </nav>
  
    )
}


export default Navbar;