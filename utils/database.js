import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true) //this is essentially done only to make sure that we dont get warnings in the console. 

    if (isConnected) {
        console.log("MongoDb is already connected. ");
        return;
    }

    try {

        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'color_palette',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;

    } catch (error) {
        console.log("Could not connect to MongoDb");
        console.log(error);
    }
}