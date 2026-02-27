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

        <section className="h-screen bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${heroImg})`}}> 

        <div className="flex flex-col text-center items-center space-y-10 py-20 px-4 md:min-h-screen md:justify-center md:py-0">

            <div> 

                <h1 className="font-bold text-2xl md:text-3xl">
                    Eat, cook, and shop food better
                </h1>

            </div>
            
            <div className="mt-10">
                <h2 className="font-semibold text-lg md:text-2xl  max-w-4xl"> 
                    Find recipes that are easy to make, local groceries that saves you money, cafes & restaurants that are loved by local people. All community driven.
                </h2>
            </div>

            <div className="mt-10">

                <button className="px-8 py-2 md:px-10 md:py-4 rounded-xl text-xl font-bold bg-[#b20808] hover:bg-red-700 hover:scale-105 transition-all"
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