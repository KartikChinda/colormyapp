import colorPalette from "@/models/colors";
import { connectToDB } from "@/utils/database";

export const PUT = async ({ params }) => {

    const id = params.slug;
    await connectToDB();
    try {
        const pallete = await colorPalette.findById(id);
        console.log("The palette we got is: ", pallete);
        const updatedPalette = await colorPalette.findByIdAndUpdate(id, { likes: pallete.likes + 1 }, { new: true });
        console.log("The updated palette we got is: ", updatedPalette);
        return new Response(JSON.stringify(updatedPalette), { status: 200 });

    } catch (error) {
        console.log("Error in updating the post");
        console.log(error);
        return new Response("Could not update post", { status: 500 });
    }
}