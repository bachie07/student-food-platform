import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"


const RecipeDetail = () => {


    const { id } = useParams() // this gets the id 
    const [ recipe , setRecipe ] = useState(null) 
    const [ error, setError ] = useState(false)

    useEffect(() => { // hook to fetch backend using id 

        fetch(`http://localhost:5001/api/recipe/getrecipe/${id}`)
        .then(res => res.json())
        .then(data => setRecipe(data))
        .catch(err => {console.error(err); setError(err);})

    }, [id])



    if(!recipe) return <div>Loading</div>

    if(error) return <div> Error, {error}</div>

    console.log(recipe)
    console.log(recipe.ingredients)

    return(
        <>

        <div className="grid grid-cols-2 h-screen w-full overflow-hidden"> 

            <div className="flex items-center justify-center h-full"> 

                <div className="text-center"> 

                <h1 className="text-bold font-serif text-[30px]"> {recipe.title}</h1>

                <h3 className="font-serif text-[15px] mb-5"> By {recipe.user.username}</h3>

                <h3 className="font-serif text-gray-600 text-[15px]"> {recipe.timeTaken}</h3>

                </div>

            </div>

            <div className="relative w-full h-full">

            <img src={recipe.imageUrl} alt={recipe.title} className="absolute inset-0 w-full h-full object-cover" /> 

            </div>


        </div>

        <hr className="mt-10 bg-neutral" />

        <div className="flex flex-col justify-start mt-10 ml-20 mr-20">

            
            <div className=""> 

            <h1 className="text-bold font-serif text-[40px]"> Ingredients</h1>

            


2

            </div>

            <div>



            </div>



        </div>
        </>


    )



}

export default RecipeDetail