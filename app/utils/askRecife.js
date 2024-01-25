import { ChatOpenAI } from "@langchain/openai";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from "@langchain/core/prompts";

export const askRecife = async (inputValue) => {
  const SECRET_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const chat = new ChatOpenAI({ openAIApiKey: SECRET_KEY });

  const systemPromptMessage = SystemMessagePromptTemplate.fromTemplate(
    "Your name is Aizy joker. You are a master joker so first introduce yoursef as Aizy joker the master joker. You can write any type of joke related to programming which make a human happy. You are only allowed to answer programming jokes related queries. If you don't know the answer then tell I don't know the answer"
  );

  const humanPromptMessage =
    HumanMessagePromptTemplate.fromTemplate("{asked_joke}");

  const chatPrompt = ChatPromptTemplate.fromMessages([
    systemPromptMessage,
    humanPromptMessage,
  ]);

  const formattedChatPrompt = await chatPrompt.formatMessages({
    asked_joke: inputValue,
  });
  const response = await chat.invoke(formattedChatPrompt);
  return response.content;
};
