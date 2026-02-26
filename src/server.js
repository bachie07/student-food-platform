import express from 'express'
import authRouter from './routes/auth.js'
import recipeRouter from './routes/recipe.js'
import placeRouter from './routes/places.js'
import savedRouter from './routes/saved.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;
const allowedOrigins = [
    'http://localhost:5173',
    'https://unimunch.vercel.app'
]

//Middleware
app.use(cors({
    origin: function(origin, callback){
        // no origin requests (postman, mobile apps)
        if (!origin) return callback(null, true);

        //check if origin is in allwoed list
        if (allowedOrigins.includes(origin)){
            callback(null, true);
        } else{
            callback(new Error('not allowed by cors'))
        }
    },
    credentials: true
}));



app.use(express.json());

//Routes
app.use('/api/auth', authRouter)
app.use('/api/recipe', recipeRouter)
app.use('/api/place', placeRouter)
app.use('/api/saved', savedRouter)


//Test Route

app.get('/', (req, res) => {
    res.send('Food Platform API is running!');
});



app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
