import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bookRoute from "./route/book.route.js"
import userRouter from "./route/user.model.js"
const app = express()




app.use(cors())
app.use(express.json())


dotenv.config()
const PORT = process.env.PORT || 5001
const MONGO_URI = process.env.MONGO_URI


// Connect To MongoDB
try {
    mongoose.connect(MONGO_URI)
    console.log("Connect To MongoDB")
    
} catch (error) {
    console.error(error)
    
}



// Connect Routes
app.use("/book",bookRoute)
app.use("/user",userRouter)



app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})