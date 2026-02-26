import { Link } from "react-router-dom";

const BottomBar = () => {

    return(

        <footer className="bg-neutral-800 text-white p-4">

            <div className="grid grid-cols-3 items-start justify-items-center mx-auto max-w-7xl gap-10 mt-10">

            <div>

            <h1 className="text-bold font-serif"> uniMunch</h1>

            <p className="text-[10px] mt-4"> Since 2026, uniMunch has made it easy for students and people to find delicious recipes, cheap groceries and affordable cafes & restaurants </p>


            </div>

            <div>

                <h1 className="text-bold font-serif"> More from uniMunch</h1>

                <div className="flex flex-col mt-4 space-y-1"> 

                <Link to="/recipes" className="text-[10px] hover:underline"> Popular Recipes</Link>

                <Link to="/groceries" className="text-[10px] hover:underline"> Discover Groceries</Link>

                <Link to="/eats" className="text-[10px] hover:underline"> Discover cafes & restaurants</Link>

                
                </div>


                

            </div>

            <div>
                
                <h1 className="text-bold font-serif"> Account</h1>

                <div className="flex flex-col mt-4 space-y-1"> 

                    <Link to="/signup" className="text-[10px] hover:underline"> Sign Up</Link>

                    <Link to="/login" className="text-[10px] hover:underline"> Log In</Link>


                
                </div>


            </div>


            </div>


        </footer>


    )


}

export default BottomBar;