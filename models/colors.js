import { model, models, Schema } from "mongoose";

const paletteSchema = new Schema({
    colone: String,
    coltwo: String,
    colthree: String,
    colfour: String,
    likes: {
        type: Number,
        default: 0,
    }
});


// So why did we do models here and not model? Basically, models keeps a track of all the models made so far in the db, since this is firing up each time we connect to the server, we do not wish to have a new model being made. So we first look in the models if there is a model called colorPalette. If yes, amazing, return that. If no, create a new one and return that. 

const colorPalette = models.colorPalette || model("colorPalette", paletteSchema);

export default colorPalette; 