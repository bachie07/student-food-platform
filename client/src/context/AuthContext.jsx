import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);

    const [token, setToken] = useState(localStorage.getItem("token") || "")

    const navigate = useNavigate();

    const loginAction = async (data) => {

        try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, { // fetch backend api , with post request
 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // this to let express now its a json file
        },
        body: JSON.stringify(data), // convert to json
        
        });

        const res = await response.json();

        console.log(res);

        if(res.user && res.token){

            setUser(res.user)
            setToken(res.token);

            localStorage.setItem("user", JSON.stringify(res.user));
            localStorage.setItem("token", res.token)
            navigate("/");
            return;

        }
        throw new Error(res.error || res.message || 'Login failed');

        } catch (err) {

            console.error(err)
            throw err;

        }
    }

    const logOut = () => {

        setUser(null)
        setToken("")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        navigate("/login")
    }

    return <AuthContext.Provider value={{ token, user, loginAction, logOut}}> {children} </AuthContext.Provider>

}

export default AuthProvider;


export const useAuth = () => {

    return useContext(AuthContext);

}