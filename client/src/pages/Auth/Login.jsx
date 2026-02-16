import { Link } from "react-router-dom"
import LogInForm from "../../components/LogInForm";

const LoginPage = () => {

    return ( 

        <div className = "grid grid-cols-2 mx-auto h-screen"> 

            <section className="bg-red-900 flex justify-center">

                <h1 className="font-serif text-white text-center font-bold mt-20 text-[40px] py-20 px-10"> Discover easy & affordable recipes, groceries and eats near you</h1>

                <img src=" " ></img>

            </section>

            <section className="bg-white mt-20">

                <div className="w-full px-16 mt-20">

                    <LogInForm/>

                </div>

                <div className="mt-20"> 

                <div className="w-full px-16 mt-20">

                    <Link to="/signup" className="block rounded-full font-bold border-4 text-center text-black hover:bg-gray-200 transition-full px-10 py-6 w-full"> 
                    Create new account
                    </Link>

                </div>
                                
                
                </div>

            </section>

        </div>



        
        
    )
}

export default LoginPage;