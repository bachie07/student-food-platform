import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const RecipePage = () => {

  const [recipes, setRecipes] = useState([])

  const [loading, setIsLoading] = useState(true)

  const [error, setError] = useState(null)

  const API_URL = 'http://localhost:5001/api/recipe/getrecipe'

  useEffect(() => {

    const fetchRecipes = async () => {

      try{
        setIsLoading(true)
        setError(null);

        const res = await fetch(API_URL);

        if(!res.ok){
          throw new Error(`Request failed: ${res.status} ${res.statusText}`)
        }

        const data = await res.json();

        setRecipes(data.recipes ?? []);
      }
      catch(err){
        setError(err.message || "Something went wrong");
      }
      finally{
          setIsLoading(false);
      }
    }

    fetchRecipes();
    
    }, [])

  
  if (loading) return <div> Loading</div>
  if (error) return <div className="p-10 text-red-600">Error: {error}</div>
  
  
  console.log("Recipes returned", recipes)


  return (
    
    <div className="min-h-screen bg-gray-50">

    <section className=" flex justify-center"> 

    <div className="text-center mt-10"> 

    <h1 className="font-bold text-black text-[30px] font-serif mt-10"> Popular Recipes</h1>



    <h3 className=" text-gray-500"> {recipes.length} recipes</h3>

    </div>

    </section>

    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 px-10">

      { recipes.map(recipe => (

        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
        <div className="block p-25 w-full bg-transparent rounded-lg border border-none mb-20" > 

          <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-full object-cover rounded-md mb-4" />

          <h1 className="mb-2 text-2xl font-serif font-bold text-gray-900"> {recipe.title}</h1>

          

        </div>
        </Link>

      )) }

    </section>

    </div>

    
    )

  }

export default RecipePage;