import mongoose, {mongo} from "mongoose";

async function conectaNaDataBase(){

    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
} 

export default conectaNaDataBase


//mongodb+srv://cunhahs:<password>@cluster0.t6i3ynx.mongodb.net/?retryWrites=true&w=majority