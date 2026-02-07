import express from "express";
import { PrismaClient } from "@prisma/client";
import { protect } from "../middleware/authmiddleware.js";

const prisma = new PrismaClient();

const router = express.Router();


// get all places API endpoint


router.get('/getplace', async (req, res) => {

    try{

    const places = await prisma.place.findMany({
        
        where: {

            deletedAt: null
        },

        include: {

            addedBy: {

                select: {

                    username: true,

                    school: true,

                }

            }

        },

        orderBy: {

            createdAt: 'desc'

        }

    })

    res.status(200).json({ message: "Places Retreived", places })
    }

    catch(error){
        res.status(500).json({ message: " error: Failed to retrieve places"})
    }

})




// post new place API endpoint 


router.post('/postplace', protect, async (req, res) => {

    try{

        const {name, address, placeType, minPrice, maxPrice} = req.body;

        const newPlace = await prisma.place.create({

            data: {

                name,
                address,
                placeType,
                minPrice: Number(minPrice),
                maxPrice: Number(maxPrice),
                addedById: req.user.userId
            }

        })

        res.status(201).json(newPlace)


    }

    catch(error){
        console.log(error)
        res.status(500).json({ message: " Unable to create place"})
    }

})

export default router