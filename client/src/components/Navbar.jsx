import { Link } from "react-router-dom"

const Navbar = () => {

    return(

        <nav className="sticky top-0 z-50 bg-red-800 text-white px-6 py-8 shadow-md">

                <div className="max-w-[1400px] mx-auto flex items-center">

                    <div className="text-5xl font-bold"> optiMEALS</div>

                    <div className="ml-40 space-x-20">

                    {/* Make sure to match the link address to the ones defined in app.jsx*/}

                    <Link to="/" className="hover:text-gray-300 transition-colors text-[30px] font-semibold"> Home </Link>

                    <Link to="/recipes" className="hover:text-gray-300 transition-colors  text-[30px] font-semibold"> Recipes </Link>

                    <Link to="/groceries" className="hover:text-gray-300 transition-colors  text-[30px] font-semibold "> Grocery </Link>

                    <Link to="/eats" className="hover:text-gray-300 transition-colors  text-[30px] font-semibold">  Eats </Link>
                
                    </div> 

                    <Link to="/login" className="ml-auto hover:text-gray-300 transition-colors  text-[25px] ">  Login / Signup </Link>


            </div>

    
        </nav>
  
    )
}


export default Navbar;