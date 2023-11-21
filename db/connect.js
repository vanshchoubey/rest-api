import mongoose from "mongoose";

const connectDB = async() => {
    const URI=process.env.URI
    try {
   await mongoose.connect(URI)
        console.log(`DB connection successful`)
    } catch (error) {
        console.log(`DB connection failed`,error)
    }
}
export default connectDB
