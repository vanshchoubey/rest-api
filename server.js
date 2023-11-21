import  express  from "express";
import dotenv from "dotenv"
import router from "./routes/routes.js";
import connectDB from "./db/connect.js";
dotenv.config()
const app =express()
const PORT=process.env.PORT || 3000
app.use("/api/products",router)
app.get("/",(req,res)=>{
    res.send("homepage")
})

const start = async() => {
    try {
        await connectDB()
        app.listen(PORT,()=>{
            console.log(`server is running at ${PORT}`)
        })
    } catch (error) {
        console.log(error)

    }
}

start()
export default app