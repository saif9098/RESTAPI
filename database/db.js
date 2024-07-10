import mongoose from "mongoose"

const connection = async (username,password)=>{
    const url =`mongodb://${username}:${password}@ac-ialtv5y-shard-00-00.9hwhg8v.mongodb.net:27017,ac-ialtv5y-shard-00-01.9hwhg8v.mongodb.net:27017,ac-ialtv5y-shard-00-02.9hwhg8v.mongodb.net:27017/?ssl=true&replicaSet=atlas-j2lsji-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(url, {useNewUrlParser:true})
       console.log("db connected")

    } catch(error){
        console.log("error found",error)
    }
}
export default connection;