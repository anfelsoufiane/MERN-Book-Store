const express=require("express");
const app=express();
const BookRouter=require("./routes/BookRoutes")
const CategoryRouter=require("./routes/CategoryRoutes")
const UserRoute=require("./routes/UserRoutes")
const mongoose=require("mongoose")
const cors=require("cors")

require("dotenv").config()
mongoose.connect(process.env.MONGO_URL)
    .then(result=>app.listen(2223,()=>console.log("server is running")))
    .catch(error=>console.log("Something is wrong"))

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use("/books",BookRouter)
app.use("/categories",CategoryRouter)
app.use("/users", UserRoute)



// app.get("/",(req,res)=>{
//    res.send("<h2> Bienvneue dans notre app Express</h2>");
// });


