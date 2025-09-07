import Prompt from "@models/propmt";
import { connectDB } from "@utils/database";
// Get

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const prompts = await Prompt.findById({ _id: params.id }).populate(
      "creator"
    );
    if (!prompts) {
      return new Response("Prompt not found", { status: 404 });
    }
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

// Update
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  try {
    await connectDB();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt", { status: 500 });
  }
};
// Delete

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    // Find the prompt by ID and remove it
    const { id } = await params;
    await Prompt.findByIdAndDelete(id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting prompt:", error);
    return new Response("Error deleting prompt", { status: 500 });
  }
};
