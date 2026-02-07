import express from "express"
import bcrypt from 'bcrypt';
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();
const router = express.Router();


router.get("/", (req, res) => {

    res.send("login here")

})


// Sign Up API Route
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

        res.status(201).json({message: "Student account created!", user})

    }

    catch (error){

        res.status(400).json({error: "Email already taken!"})

    }


})


// Login API route

router.post("/login", async(req, res) => {

    try{

        const{ email, password} = req.body;

        //Find user by email

        const user = await prisma.user.findUnique({ // use unique because email is unique in database
            where: { email: email}
        })

        //Check if user exist

        if(!user){

            return res.status(401).json({ error: "Invalid email or password" });

        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){

            return res.status(401).json({error: "Invalid email or password"})
        }

        //sign token 

        const token = jwt.sign(

            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '7d'}

        );

        //if success

        res.status(200).json({
            message: "Login successful! Welcome back",
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            },
            token
        });

    }

    catch(error){

        res.status(500).json({ error: "Something went wrong on the server"})

    }

})


export default router