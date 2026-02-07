import express from "express"
import { PrismaClient } from "@prisma/client"
import { protect } from "../middleware/authmiddleware.js"

const prisma = new PrismaClient();

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
                userId: req.user.userId

            }

        })

        res.status(201).json(newRecipe);

    }

    catch(error){

        res.status(401).json({message: "Failed to create recipe"});
    }


})

export default router