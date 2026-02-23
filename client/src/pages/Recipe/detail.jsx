import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"


const RecipeDetail = () => {


    const { id } = useParams() // this gets the id 
    const [ recipe , setRecipe ] = useState([])

    useEffect(() => { // hook to fetch backend using id 

        fetch(`http://localhost:5001/api/recipe/getrecipe/${id}`)
        .then(res => res.json())
        .then(data => setRecipe(data))
        .catch(err => console.error(err))

    }, [id])

    console.log(recipe)

    return(


    <div> This is the recipe detail, {recipe.title}</div>

    )



}

export default RecipeDetail