const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const mongoose=require("mongoose")

const path=require("path")

app.use(cors());

/*
const PORT = 6000;
app.listen(PORT, () => {
    console.log('server is running on port ${PORT}');
});
*/

//const collection=require('./mongodb')
//const loginConnection = mongoose.createConnection(loginUri);

//const calendarConnection = mongoose.createConnection(calendarUri);
//const uri = "mongodb+srv://hello:world@fta.robftz5.mongodb.net/"
const uri = "mongodb+srv://hello:world@fta.robftz5.mongodb.net/FTA"
async function connect(){
    try {
        await mongoose.connect(uri)
        console.log("connected")
    }
    catch(error){
        console.log("didn't connect")
    }
}
    connect()

    const LogInSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    })
    
    const UserinfoSchema = new mongoose.Schema({
        gender:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        height:{
            type:Number,
            required:true
        },
        weight:{
            type:Number,
            required:true
        },
        goal:{
            type:Number,
            required:true
        }
    })
    
    const logins = mongoose.model('logins', LogInSchema)

    const userInfo = mongoose.model('userInfo', LogInSchema)


    async function userExists(username) {
        try {
          const existingUser = await logins.findOne({ name: username });
          return !!existingUser; // Returns true if user exists, false otherwise
        } catch (error) {
          return false; // Handle the error as needed
        }
      }
      
      

app.post('/CreateAccount', async (req,res)=>{
    console.log("requested")
    try{
        console.log("requested")
        const data={
            name: req.body.name,
            password: req.body.password
        }
        
        //const existingUser = await collection.findOne({name: data.name})
        
        const doesUserExist = await userExists(data.name);
        if(doesUserExist){
            res.send({message: "User already exists" })
        }
        else{
        
            const userdata = await logins.insertMany(data)
            console.log(userdata)
            res.status(200).json({ message: 'Account created successfully' })
        }
        
    }
    catch{
        res.status(401).json({ message: 'Login failed' });
    }

})

app.post('/login', async (req,res)=>{
    console.log("here");
    try{
        const data={
            name: req.body.name,
            password: req.body.password
        }   
        const check=await logins.findOne({ name: data.name, password: data.password})

        if(check){
            //res.render({message : "home" })
            res.send({message : 'success'})
        }
        else{
            res.send({ message : "Wrong password"})
        }
    }
    catch(error){
        console.error('Error during login:', error);
        res.send({message : "wrong login user"})
    }

    //res.render("home")

})


app.post('/CalorieCalculator', async (req,res)=>{
    try{
        const data={
            gender: req.body.gender,
            age: req.body.age,
            height: req.body.height,
            weight: req.body.weight,
            goal: req.body.goal
        }
        
        
        
        const userdata = await userInfo.insertMany(data)
        console.log(userdata)
        res.status(200).json({ message: 'calorie data stored successfully' })
        
        
    }
    catch{
        res.status(401).json({ message: 'calorie info failed' });
    }

})





const eventSchema = new mongoose.Schema({
    start: { type: String, required: true },
    end: { type: String, required: true },
    title: { type: String, required: true },
    user: { type: String, required: true }, // Assuming user ID is a string
  });
  
  const calendar = mongoose.model('calendar', eventSchema);

app.post('/CalendarComponent', async(req,res)=>{
    try {
        //const receivedData = req.body;
        const receivedData={
            start: req.body.start,
            end: req.body.end,
            title: req.body.title,
            user: req.body.user
        }
        console.log('Received data:', receivedData);
    
        // Implement your logic to save the data to the database here
        const newEvent = await calendar.insertMany(receivedData);
        console.log(newEvent);
        res.status(200).json({ message: 'Data received successfully' });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }

})


app.get('/CalendarComponent', async (req,res)=>{
    try {
        const username = req.query.user;
        // Fetch events for the specified user from the database
        const events = await calendar.find({ user: username });
        
        res.json(events);
      } catch (error) {
        console.error('Error while fetching events:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
})

app.delete('/CalendarComponent/:title', async (req, res) => {
    console.log("deleting event")
    try {
        const title = req.params.title;
        const deletedEvent = await calendar.findOneAndDelete({ title: title });
    
        if (!deletedEvent) {
            console.log("not deleted")
          return res.status(404).json({ message: 'Event not found' });
        }
    
        res.json({ message: 'Event deleted successfully', deletedEvent });
      } catch (error) {
        console.error('Error while deleting event:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
})




app.listen(4000, ()=>{
    console.log("server started on port 4000")
})