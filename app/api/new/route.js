import colorPalette from "@/models/colors";
import { connectToDB } from "@/utils/database";

export const POST = async (req, res) => {
    const { cone, ctwo, cthree, cfour } = await req.json();
    console.log("The colors are: ", cone, ctwo, cthree, cfour);
    try {
        await connectToDB(); //lambda function
        const newPalette = new colorPalette({ colone: cone, coltwo: ctwo, colthree: cthree, colfour: cfour });
        await newPalette.save();
        return new Response(JSON.stringify(newPalette), { status: 201 });

    } catch (error) {
        console.log("Error occured here, in routes.js")
        console.log(error);
        return new Response("Failed to create prompt.", { status: 500 });
    }
}