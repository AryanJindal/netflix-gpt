const { GoogleGenerativeAI } = require("@google/generative-ai");

const generationConfig = {
  stopSequences: ["red"],
  maxOutputTokens: 200,
  temperature: 0.1,
  topP: 0.1,
  topK: 16,
};
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_Gemini_key, generationConfig);

const GeminiCaller = async (input) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "You are an AI model trained to recommend users with Movies name. The result should only contain movie names in a comma seperated values. A valid example of output format is mentioned in backTicks `Raaz, Andaz Apna Apna, Ajab Prem Ki Gajab Kahani`. Now recommend me a movie for the following `" + input + "`";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  // console.log(text)
  return text;
}

export default GeminiCaller;