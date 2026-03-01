import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import { useState, useEffect} from 'react'
import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom";
import Dropdown from "./dropdown";
import { Menu } from "lucide-react"
import SideBar from "./Sidebar";

const Navbar = ({ onMenuClick}) => {

    const navigate = useNavigate(); // navigate 

    const { user, token } = useAuth() // for auth

    const [isScrolled, setIsScrolled] = useState(false);

    const [ query, setQuery ] = useState("") // track query on change


    useEffect(() => { 

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)


    }, []);

    function handleSubmit(e){ // handleSubmit when user hit enter
        
        e.preventDefault();

        navigate(`/search?q=${encodeURIComponent(query)}`) // use encodeURIComponent(query) to store query in search bar and navigate to search page

    }


    return(

        <nav className={`sticky top-0 z-50 bg-white text-black px-6 py-1 shadow-md transition-all duration-500 sm:${isScrolled ? "py-1" : "py-6"}`}>

                <div className="max-w-full mx-auto flex-col space-y-3 mt-2">

                    <div className={`flex sm:${ isScrolled ? "mb-1" : "mb-5" }`}>

                        <div className="w-1/3 flex justify-start">
                        <button onClick={onMenuClick}>
                        <Menu color="black" className="block sm:hidden md:hidden lg:hidden"/>
                        </button>

                        </div>
                        
                        <div className="w-1/3 flex justify-center">
                        <Link to="/" className={`text-lg font-bold text-red-600 transition-all duration-500 font-serif sm:${ isScrolled ? "text-3xl" : "text-5xl"}`}>
                        uniMunch
                        </Link>
                        </div>

                    {!token ? (
                        <div className="w-1/3 flex justify-end">
                        <Link to="/login" className="hidden sm:block ml-auto hover:text-gray-300 transition-colors text-[15px] mr-10 text-black">  Sign in </Link>
                        </div>
                    ) : ( 
                        <div className="w-1/3 flex justify-end">
                        <h1 className="mt-2 hidden md:block"> Munch time, {user.username}!</h1>
                        <Dropdown/>
                        <Link className="black rounded-xl flex bg-red-700 w-1/2 text-sm text-white justify-center items-center" to="/post"> Post </Link>
                        </div>
                        
                        
                    )}

                    </div>

                    <hr className={`hidden sm:block h-px bg-gray-200 border-0 transition-all duration-500 sm:${ isScrolled ? "my-4" : "my-7"}`}/>
                    
                    <div className="flex">

                        <div className="hidden font-serif text-black sm:block sm:w-1/2 md:w-1/3 sm:justify-start sm:space-x-5 ml-10 sm:text-md md:text-lg">

                            {/* Make sure to match the link address to the ones defined in app.jsx*/}

                            <Link to="/recipes" className="hover:text-red-500 transition-colors"> Recipes </Link>

                            <Link to="/groceries" className="hover:text-red-500 transition-colors "> Grocery </Link>

                            <Link to="/eats" className="hover:text-red-500transition-colors ">  Eats </Link>

    
                        </div>
                        <div className="hidden sm:flex md:w-1/3 "></div>

                        <div className="w-full sm:w-1/2 md:w-1/3 sm:flex sm:justify-end relative">

                            <form onSubmit={handleSubmit} className="w-full">

                            <Search className="absolute left-3 top-1/3 -translate-y-1/2 w-4 h-4 text-gray-400 sm:" />
                            <input className="w-full pl-10 bg-transparent placeholder:text-slate-400 text-black text-sm border border-slate-200 rounded-lg px-1 py-1 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow mb-5"
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for 'chicken'"/>

                            </form>

                        </div>


                    </div> 


            </div>
    
        </nav>

       

  
    )
}


export default Navbar;