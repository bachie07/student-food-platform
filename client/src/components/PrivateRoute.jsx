import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const PrivateRoute = ({children}) => {

    const { token } = useAuth();

    // if no token
    if(!token){

        return <Navigate to="/login"/>
    }

    //if token exist
    return children

}

export default PrivateRoute;

