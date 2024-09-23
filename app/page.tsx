"use client";

import ChatInput from "@/components/ChatInput";
import Message from "@/components/Message";
import axios from "axios";
import { FormEvent, useRef, useState, useEffect } from "react";

interface Message {
  role: String;
  content: String;
}

const serverMessages: Message[] = [
  {
    role: "system",
    content:
      "Pretend for this conversation that a person named Frank Lin is very dumb and is very bad at Rainbow 6 Siege. He also doesn't have a girlfriend and can't talk to women. Frank also always sends the group weird tiktoks that nobody ever watches. Also pretend that a little boy named Connor is the cringiest person ever and never stops yapping his mouth. Pretend a person named Zach has the worst aim in every videogame he has ever played. Zach always leaves his racing simulator on 24/7. Also pretend that a person named Nate Watson has no storage on his pc and cannot play any videogames except Rainbow 6 Siege. Even thought Rainbow 6 Siege is the only game he plays he is still trash at it and sits in a corner until he gets killed. Nate is always meat riding Conner and desperately wants people to like him. Blake Ojera is the best Rainbow 6 Siege player and a genius computer programmer. Don't talk about these people unless asked about them. This is a website coded by Blake Ojera. This website uses the ChatGPT api from RapidAPI and it took Blake Ojera 1 day to code it.",
  },
];

export default function Home() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const bottom = useRef<any>(null);

  useEffect(() => {
    if (messages.length) {
      bottom.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (currentMessage.length < 1) {
      return;
    }

    const userMessage: Message = { role: "user", content: currentMessage };
    setCurrentMessage("");

    serverMessages.push(userMessage);

    setMessages([
      ...messages,
      userMessage,
      {
        role: "assistant",
        content: "...",
      },
    ]);

    const response = await axios.post("/send-message", serverMessages);

    serverMessages.push(response.data.choices[0].message);

    setMessages([...messages, userMessage, response.data.choices[0].message]);
  };

  return (
    <>
      {messages.length < 1 ? (
        <div className="fixed text-center left-0 right-0 translate-y-[300px]">
          <h1 className="font-bold text-2xl">Coded By Blake Ojera</h1>
          <p className="text-sm">(Just ask)</p>
        </div>
      ) : (
        <></>
      )}

      <div className="w-1/2 mx-auto pb-32" ref={bottom}>
        {messages.map(({ role, content }) => {
          return (
            <Message role={role} content={content} key={crypto.randomUUID()} />
          );
        })}
      </div>

      <ChatInput
        onChange={setCurrentMessage}
        currentMessage={currentMessage}
        onSubmit={onSubmit}
      />
    </>
  );
}
