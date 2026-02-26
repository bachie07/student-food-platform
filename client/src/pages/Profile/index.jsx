import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";


const ProfilePage = () => {

    const { user , logOut } = useAuth();

    const [username, setUsername] = useState("")

    const [ showButton, setShowbutton ] = useState(false)

    useEffect(() => {

        if (username.length > 0) {

            setShowbutton(true)

        }

    }, [username])


    return(

    <div className="flex flex-col justify-center items-center mt-20 gap-y-10 max-w-md mx-auto mb-20"> 

        <div className="mt-20 space-y-2 text-center">

            <h1 className="font-bold font-serif text-[35px]">Account</h1>

            <p className="text-[18px]"> You are signed in as {user.email}</p>

            <button onClick={logOut} className="underline hover:no-underline"> Logout</button>

        </div>

        <div className="flex flex-col square bg-gray-100 w-full h-[25rem] mx-auto">

            <div className="max-w-sm ml-8 space-y-6">

                <div>
                    <h1 className="font-semibold font-serif text-[18px] text-center mt-10 mb-5"> Credential</h1>

                    <h1 className="font-serif text-[13px]"> Email </h1>

                    <h1> {user.email}</h1>
                </div>

                <hr className="bg-black w-full"></hr>

                <div>
    
                    <h1 className="font-serif text-[13px]"> Password </h1>

                    <Link to="/changePassword" className="underline text-[10px]"> Change Password</Link>


                </div>

                <hr className="bg-black w-full"></hr> 

                <div>

                    <h1 className="font-serif text-[13px] mb-2"> Username </h1>

                    <input type="text" placeholder="YOUR_USERNAME" className="w-full h-10 text-[12px] pl-3" onChange={(e) => setUsername(e.target.value)}/>

                    { showButton && <button className="w-full h-10 mt-2 text-white bg-gray-800 font-serif"> Save Username</button>}

                </div>


            </div>

        </div>

        <div className="flex flex-col square bg-gray-100 w-full h-96 mx-auto">

        </div>

    </div>
    )
}

export default ProfilePage;


