import mongoose, { connection } from "mongoose"

export const connectToDB = async () => {
    const connection={}
   
    try{
        if(connection.isConnected) return;
      
        const db=await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,
        }) ;
        connection.isConnected=db.connections[0].readyState;

        console.log("Connected to MongoDB");

    } catch(error){
        console.log("hello from line 14")

        console.log(error)

    }
}