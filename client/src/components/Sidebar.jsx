import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu } from "lucide-react";


const SideBar = () => {

    const { logOut } = useAuth();

    const SidebarItems = [{ title: "Recipes", url: "/recipes"},
                        { title: "Grocery", url: "/groceries"},
                        { title: "Eats", url: "/eats"}]
 

    return (

        <div className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm z-50"></nav>
            <div className="p-4 pb-2 flex justify-between items-center">
                hello
            </div>


        </div>
    )
}

export default SideBar;



