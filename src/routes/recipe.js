import express from "express"
import prisma from '../db.js';
import { protect } from "../middleware/authmiddleware.js"


const router = express.Router();


// Get Recipe endpoint 

router.get("/getrecipe", async(req, res) => {

    const recipes = await prisma.recipe.findMany({

        where: {

            deletedAt: null

            },

        include:{

            user: {

                select: {

                    username: true,

                    school: true,
                }
            }

        },

        orderBy: {

            createdAt: 'desc',

            }

        })

    res.status(201).json({ message:"Recipes retreived", recipes})

});


//get recipe by id

router.get("/getrecipe/:id", async(req, res) => {

    const { id } = req.params;

    try{

    const recipe = await prisma.recipe.findUnique({

        where: {

            id: id,

        },
        include: {

            user: {

                select: {

                    username: true,
                    school: true
                }
            }
        }

    })

    if(!recipe){
        return res.status(404).json({message: "Recipe not found"})
    }

    res.json(recipe)

} catch(error){

    res.status(500).json({message: "Server error"})

}})



//Create Recipe endpoint


router.post("/postrecipe", protect, async(req, res) => {

    try{

        const { title, timeTaken, ingredients, instructions, cost } = req.body

        const newRecipe = await prisma.recipe.create({

            data: {

                title,
                timeTaken,
                ingredients,
                instructions,
                cost,
                user: req.user.userId

            }

        })

        res.status(201).json(newRecipe);

    }

    catch(error){

        res.status(401).json({message: "Failed to create recipe"});
    }


})

export default router