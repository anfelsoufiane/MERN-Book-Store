const mongoose=require("mongoose")

const BookSchema= new mongoose.Schema({
    name:{type: String, required: true},
    description:String,
    isbn:{type: String, required: true},
    auteur:String,
    editeur:String,
    dateEdition:Date,
    price:{type: Number, required: true},
    image:String,
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
})

const Book=mongoose.model("Book", BookSchema)

module.exports=Book