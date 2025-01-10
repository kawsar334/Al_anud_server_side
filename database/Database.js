
const mongoose = require("mongoose");

const database = ()=>{

    mongoose.connect(process.env.DB, 
    { 
        // useNewUrlParser: true,
        //  useUnifiedTopology: true,
         }
    )
        .then(() => console.log("Database connected"))
        .catch(err => console.error("Database connection error:", err));
}


const connectDatabase =()=>{

    mongoose.connect(process.env.MONGOURL, {}
    ).then(() => {
        console.log("database connected ")
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = database; 

