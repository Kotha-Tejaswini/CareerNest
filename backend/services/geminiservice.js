const {GoogleAI, GoogleGenerativeAI}=require('@google/generative-ai');
require('dotenv').config();
const genAI=new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
async function getCareerSuggestions(answers){
    const model=genAI.getGenerativeModel({model:'gemini-pro'});
    const prompt = `Suggest careers based on this quiz data: ${JSON.stringify(answers)}.
  Include job descriptions, salary range, and growth opportunities.`;
  const result=await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
module.exports=getCareerSuggestions;