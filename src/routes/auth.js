import express from "express"
import bcrypt from 'bcrypt';
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
const router = express.Router();


router.get("/", (req, res) => {

    res.send("login here")

})

router.post("/signup", async (req, res) => {

    try{

        const { email, username, password, school, name} = req.body;

        //1. Hasing password

        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(password, saltRounds)

        //2. save to cloud database using prisma

        const user = await prisma.user.create({

            data: {

                email: email,

                password: hashedPassword,

                username: username,

                school: school,

                name: name || null
            }

        });

        res.status(201).json({message: "Student accounr created!", user})

    }

    catch (error){

        res.status(400).json({error: "Email already taken!"})

    }


})


export default router