const mongoose=require("mongoose")

//mongoose.connect("mongodb://localhost:27017/TSF")
//mongoose.connect("mongodb+srv://ty:3Bm88vv9@fta.robftz5.mongodb.net/")
/*
.then(()=>{
    //console.log("mongodb connected");
    alert("connected")
})
.catch(()=>{
   //console.log("failed to connect");
   alert("failed")
})
*/
const uri = "mmongodb+srv://hello:world@fta.robftz5.mongodb.net/FTA";
async function connect(){
    try {
        await mongoose.connect(uri)
        alert("connected")
    }
    catch(error){
        alert(error)
    }
}

connect();

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("logins", LogInSchema)

module.exports=collection