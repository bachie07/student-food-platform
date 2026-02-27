import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const SideBar = () => {

    const { logOut } = useAuth();

    const [ isOpen, setIsOpen ] = useState(false)


    const SidebarItems = [{ title: "Recipes", url: "/recipes"},
                        { title: "Grocery", url: "/groceries"},
                        { title: "Eats", url: "/eats"}]
 

    return (

        <div>

            hello



        </div>
    )
}

export default SideBar;



