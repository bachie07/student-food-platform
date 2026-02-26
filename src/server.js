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
    'https://unimunch.vercel.app',
    /^https:\/\/unimunch-.*\.vercel\.app$/
]

//Middleware
//Middleware
app.use(cors({
    origin: function(origin, callback){
        // Allow requests with no origin (Postman, mobile apps)
        if (!origin) return callback(null, true);

        // Check if origin matches any allowed pattern
        const isAllowed = allowedOrigins.some(allowed => {
            if (typeof allowed === 'string') {
                return allowed === origin;  // Exact string match
            }
            if (allowed instanceof RegExp) {
                return allowed.test(origin);  // Regex match
            }
            return false;
        });

        if (isAllowed) {
            callback(null, true);
        } else {
            console.log('Blocked origin:', origin);  // Debug log
            callback(new Error('Not allowed by CORS'));
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
    PORT,'0.0.0.0',
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
