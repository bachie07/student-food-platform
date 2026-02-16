import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/hero_section.jpg"


const HomePage = () => {

    const navigate = useNavigate()


    const contents =[{title: "Recipes", 
                     desc: "Discover quick budget friendly meals posted by students",
                    path:"/recipes" }, 
                    {title:"Groceries",
                    desc: "Find local groceries that saves you money on",
                    path:"/groceries"
                    },
                    {title:"Eats",
                    desc: "Find delicious, affordable places to drink & eat",
                    path:"/eats"
                }];

    return(
        <div> 

        <section className="h-screen bg-cover bg-center relative flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImg})`}}> 

        <div className="flex flex-col justify-center text-center items-center ">

            <div className="mt-10"> 

                <h1 className="mt-18 font-bold text-5xl">
                    Eat, cook, and shop food better
                </h1>

            </div>
            
            <div className="mt-10">
                <h2 className="font-semibold text-3xl max-w-4xl"> 
                    Find recipes that are easy to make, local groceries that saves you money, cafes & restaurants that are loved by local people. All community driven.
                </h2>
            </div>

            <div className="mt-10">

                <button className="px-10 py-4 rounded-xl text-xl font-bold bg-[#b20808] hover:bg-red-700 hover:scale-105 transition-all"
                onClick={() => navigate('/recipes')}> Get started </button>
                
            </div>
        </div>

        </section>

        <section>



        </section>



        </div>
    
    )

  }

export default HomePage;