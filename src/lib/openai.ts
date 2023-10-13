import {Configuration, OpenAIApi} from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function generateImagePrompt(name: string){
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Generate a highly specific and accurate prompt for an image generation AI model that can be used to create a cover for a school notebook. This cover should reflect the essence of the topic it is meant for. Please specify the topic, main visual elements, color palette, and any relevant symbols or icons that would be crucial to convey the subject matter effectively."
        },
        {
          role: "user",
          content: `Please generate a cover for my notebook with the title ${name}.`
        },
      ]
    });

    const data = await response.json();
    const image_description = data.choices[0].message.content;
    return image_description as string;

  }
  catch(e){
    console.error(e);
    throw e;
  }

}

export async function generateImage(){

}