import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"


const RecipeDetail = () => {


    const { id } = useParams() // this gets the id 
    const [ recipe , setRecipe ] = useState(null) 
    const [ error, setError ] = useState(false)

    useEffect(() => { // hook to fetch backend using id 

        fetch(`${import.meta.env.VITE_API_URL}/${id}`)
        .then(res => res.json())
        .then(data => setRecipe(data))
        .catch(err => {console.error(err); setError(err);})

    }, [id])

    if(error){
        return <div> Error, {error}</div>
    }
    else if(!recipe){

        return<div>Loading</div>

    }


    const ingredientsArray = recipe.ingredients.split(',')

    const instructionArray = recipe.instructions.split(/\d+\.\s/).filter(step => step.trim() !== "")


    console.log(recipe)
    console.log(recipe.ingredients)
    console.log(ingredientsArray)

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

        <div className="grid grid-cols-2 mt-10 max-w-7xl mx-auto">

            <div className="space-y-10">

                <h1 className="text-bold font-serif text-[40px]"> Ingredients</h1>

                <ul className="list-disc list-inside space-y-4 font-serif text-[20px]">
                    {ingredientsArray.map((item, index) => 
                    <li key={index}>{item}</li>)}
                </ul>

            </div>

            <div className="space-y-10">

                <h1 className="text-bold font-serif text-[40px]"> Instructions</h1>
                
                <ol className="list-decimal list-inside space-y-4 font-serif text-[20px]">
                {instructionArray.map((item, index) => 
                    <li key={index}> {item}</li>
                    )}
                    
                </ol>

            </div>

        </div>

        <hr className="mt-10 bg-neutral" />

        <div> hello</div>

        </>


    )



}

export default RecipeDetail