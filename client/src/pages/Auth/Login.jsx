import { Link } from "react-router-dom"
import LogInForm from "../../components/LogInForm";
import loginuiphoto from  "../../assets/loginuiphoto.png"

const LoginPage = () => {

    return ( 

        <div className = "grid grid-cols-1 md:grid-cols-2 mx-auto h-screen gap-y-20"> 
    
            <section className="bg-red-900 flex flex-col min-height md:h-full md:justify-center items-center justify-center py-5">

                <Link to="/" className="font-serif text-white text-center font-bold text-3xl md:hidden">uniMunch</Link>
                <h1 className="hidden md:block md:text-2xl font-serif text-white text-center font-bold text-lg px-2"> Discover easy & affordable recipes, groceries and eats near you</h1>
                <div className="px-20">
                    <img src={loginuiphoto} className="hidden md:block w-full h-auto object-contain -translate-y-18" ></img>
                </div>
                
            </section>

            <section className="bg-white h-screen flex flex-col md:justify-center">

                <div className="w-full px-9">

                    <LogInForm/>

                </div>

                <div className="w-full px-16 mt-20">

                    <Link to="/signup" className="block rounded-full font-bold border-4 text-center text-black hover:bg-gray-200 transition-full px-10 py-6 w-full"> 
                    Create new account
                    </Link>

                </div>
                                
            </section>

        </div>
        
        
    )
}

export default LoginPage;