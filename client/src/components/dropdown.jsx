import { Link } from "react-router-dom";
import {useState} from "react";
import { useAuth } from "../context/AuthContext";
import { ChevronDown } from "lucide-react";

const Dropdown = () => {

    const { logOut } = useAuth(); 

    const dropdownItems = 
    [ { title: 'Manage Profile', url: '/userProfile'},
    { title: 'My Saved Recipes', url: '/saved'},]

    const [isOpen, setIsOpen] = useState(false);

    return( 

        <div className="relative inline-block text-left" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}> 
            <button className="px-4 py-2">
                {isOpen ? (<h1 className="font-semibold underline">My Account</h1>) : (<h1 className="font-semibold">My Account</h1>)}
            </button>
            <ChevronDown className="absolute right-0 top-1/4 translate-y-1/4 w-4 h-4 text-gray-40" />


        {isOpen && (

            <div className="absolute right-0 w-30 bg-red-800 shadow-lg z-50 mx-auto">
                {dropdownItems.map((item) => (
                    <Link to={item.url} key={item.title} className="block px-4 py-2 text-sm text-center text-white hover:bg-red-700">
                        {item.title}
                    </Link>

                ))}
                <hr className="mx-auto w-20 bg-black"/>
                <button onClick={logOut} className="px-10 py-2 text-sm text-left text-white hover:bg-red-700"> Logout</button>
           
            </div>
        )}
        
        </div>
    );
};

export default Dropdown;