import express from "express"
import { PrismaClient } from "@prisma/client"
import { protect } from "../middleware/authmiddleware.js"

const prisma = new PrismaClient();

const router = express.Router();

// Save recipe endpoint
router.post('/save-recipes/:id', protect, async (req, res) => {

    try{
    
    // get params id of recipe and userId
    const recipeId = req.params.id;

    const userId = req.user.userId;
    
    //create new data object that stores both
    const savedItem = await prisma.savedRecipe.create({

        data: {
            recipeId : recipeId,
            userId: userId
        }

    });

    // success new object ( status 201)
    res.status(201).json({message: "Recipe saved to collection", savedItem})

    }

    
    catch(error){

        if (error.code === 'P2002'){
            return res.status(400).json({ message: "You have already saved this recipe"});
        }

        console.error(error)

        res.status(500).json({ message: " Unable to save recipe"})
    }

    });



//Remove recipe from saved list endpoint 

router.delete('/remove-recipe/:id', protect, async (req, res) =>{

    try{

    //delete if all pass
    await prisma.savedRecipe.delete({
        where:{ userId_recipeId: {

            userId: req.user.userId,
            recipeId: req.params.id

        }}
    })

    //success (status 200)
    res.status(200).json({message: "recipe unsaved successfully"})

    }

    catch(error){

        if(error.code === 'P2025'){

            res.status(400).json({message: " This recipe isn't saved in database"})
        }
        console.error(error)

        res.status(500).json({ message: "Unable to delete the recipe"})

    }

} )


// Save post endpoint 

router.post('/save-place/:id', protect, async ( req, res) => {

    try{

        const savePlace = await prisma.savedPlace.create({

            data: {
                userId: req.user.userId,
                placeId: req.params.id
            }

        })

        res.status(201).json({message: "Place saved to collection", savePlace})

    }


    catch(error){

        if(error.code === "P2002"){
            return res.status(400).json({message: "You already save this place"})
        }
        
        console.error(error)

        res.status(500).json({ message: " Unable to save place"})
    }

})


//Delete post endpoint 

router.delete('/remove-place/:id', protect, async (req, res) =>{

    try{

    //delete if all pass
    await prisma.savedPlace.delete({
        where:{ userId_placeId: {

            userId: req.user.userId,
            placeId: req.params.id
        }}
    })

    //success (status 200)
    res.status(200).json({message: "place unsaved successfully"})

    }

    catch(error){

        if(error.code === 'P2025'){

            res.status(400).json({message: " This place isn't saved in database"})
        }
        console.error(error)

        res.status(500).json({ message: "Unable to delete the place"})

    }

} )



//Get all save recipe and places

router.get('/', protect, async ( req, res) => {


    try{

    const savedRecipes = await prisma.savedRecipe.findMany({

        where: {

            userId: req.user.userId
        },

        include: {

            recipe: {

                include: {

                    user: {

                        select: {
    
                            username: true,
        
                            school: true,
                        }
    
                    }
                }
            }
        },

        orderBy: {

            recipe: {

                createdAt: 'desc'
            }

        }


    })

    const savedPlaces = await prisma.savedPlace.findMany({

        where: {

            userId: req.user.userId
        },

        include: {

            place: {

                include: {

                    addedBy: {

                        select: {
    
                            username: true,
        
                            school: true,
                        }
    
                    }
                }
            }
        },

        orderBy: {

            place: {

                createdAt: 'desc'
            }

        }


    })


    res.status(200).json({recipes: savedRecipes, places: savedPlaces})

    }

    catch(error){

        console.error(error)

        res.status(500).json({message: "Unable to return saved recipes list"})

    }

})


export default router