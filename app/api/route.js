import { connectToDB } from "@/utils/database";
import colorPalette from "@/models/colors";

export const revalidate = 0;

export const GET = async () => {
    await connectToDB();

    try {
        const palettes = await colorPalette.find();
        return new Response(JSON.stringify(palettes), { status: 200 });
    } catch (error) {
        console.log("The error is in fetching all posts. ")
        return new Response("Cannot fetch posts", { status: 500 });
    }
}