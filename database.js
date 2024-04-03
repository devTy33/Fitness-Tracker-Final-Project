//use mongodb atlas as our data base
//only using sample data for now
//when we have ui up and going going to store user id
//then make another cluster to store workout information.

const { MongoClient } = require('mongodb');

async function main(){
    //connects to mongo cluster 
    //userid is jpalumb1
    //pass id Node1234
   
    const uri = "mongodb+srv://jpalumb1:Node1234@cluster0.1vexblx.mongodb.net/?retryWrites=true&w=majority";

    
    const client = new MongoClient(uri);

    try{
        await client.connect();

        await listDatabases(client);
        
    } catch(e) {
        console.error(e);
    } finally {
        await client.connect();
    }
}

main().catch(console.error);

//sample code to access our databases
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};