import mongoose,{Schema} from "mongoose";
const productsSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name must be provided"]
    },
    price  :{
        type:String,
        required:[true,"Price must be provided"]
    },
    feature:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.9
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{ 
            values:["apple","samsung","dell","mi"],
            message:`{VALUE} is not supported`
        }
    },
},{})
export  const Products=mongoose.model("Products",productsSchema)