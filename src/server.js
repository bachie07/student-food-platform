import express from 'express'
import router from './routes/auth.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();


const app = express();
const PORT = 5001;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/auth', router)


//Test Route

app.get('/', (req, res) => {
    res.send('Food Platform API is running!');
});



app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
