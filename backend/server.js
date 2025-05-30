import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb'
import connectCloudinary from './config/cloudinary'
import userRouter from './routes/userRoute'

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter)

app.get('/',(req, res)=>{
    res.send("API Working")
})

// app.listen(port, ()=> console.log('Server started on PORT : ' + port))
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${4000}`);
});
