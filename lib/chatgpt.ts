import Configuration from "openai"
import OpenAIApi from "openai"
// const configuration = new Configuration({
//    apiKey: process.env.OPENAI_API_KEY,
// })

const openai = new OpenAIApi({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  });
export default openai