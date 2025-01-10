
const mongoose = require("mongoose");

const database = ()=>{

    mongoose.connect("mongodb+srv://kawsar:kawsar@cluster0.igjje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
    { 
        // useNewUrlParser: true,
        //  useUnifiedTopology: true,
         }
    )
        .then(() => console.log("Database connected"))
        .catch(err => console.error("Database connection error:", err));
}



module.exports = database; 

