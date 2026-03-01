import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react"

const HomePage = () => {

    const navigate = useNavigate()

    const [recipes, setRecipes] = useState([])

    const [loading, setIsLoading] = useState(false)

    const [error, setError] = useState(null)


    useEffect(() => {

        const fetchRecipes = async() => {
            
            try{

                setIsLoading(true)
                setError(null);

                const res = await fetch(`${import.meta.env.VITE_API_URL}/recipe/featured`);

                if(!res.ok){

                    throw new Error(`Request failed: ${res.status} ${res.statusText}`)
                }
                
                const data = await res.json();

                setRecipes(data.recipes ?? [])
            }

            catch(err){
                setError(err.message || "Something went wrong")
            }
            finally{
                setIsLoading(false)
            }

        }

        fetchRecipes();


    },[])

    console.log(recipes)

    if (error) return <div className="p-10 text-red-600">Error: {error}</div>
    if (loading) return <div></div>


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

        <section className="h-screen bg-cover bg-neutral bg-center relative text-white">

        <div className="text-black flex flex-col text-center items-center space-y-10 py-20 px-4 md:min-h-screen md:justify-center md:py-0">

            <div> 

                <h1 className="font-bold text-2xl md:text-3xl">
                    Eat, cook, and shop food better
                </h1>

            </div>
            
            <div className="mt-10">
                <h2 className=" text-lg md:text-2xl  max-w-4xl"> 
                    Find recipes that are easy to make, local groceries that saves you money, cafes & restaurants that are loved by local people. All community driven.
                </h2>
            </div>

            <div className="mt-10">

                <button className="px-9 py-2 md:px-10 md:py-4 rounded-xl text-white text-xl font-bold bg-[#b20808] hover:bg-red-700 hover:scale-105 transition-all"
                onClick={() => navigate('/recipes')}> Get started </button>
                
            </div>
        </div>

        <div className="w-full flex flex-col items-center space-y-10">
                <h1 className="text-black font-semibold font-serif"> Featured Recipes</h1>

                <h1 className="text-black"> </h1>

        </div>



        </section>

        </div>
    
    )

  }

export default HomePage;