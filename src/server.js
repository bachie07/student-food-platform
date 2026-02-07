import express from 'express'
import authRouter from './routes/auth.js'
import recipeRouter from './routes/recipe.js'
import placeRouter from './routes/places.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();


const app = express();
const PORT = 5001;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/auth', authRouter)
app.use('/api/recipe', recipeRouter)
app.use('/api/place', placeRouter)


//Test Route

app.get('/', (req, res) => {
    res.send('Food Platform API is running!');
});



app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
