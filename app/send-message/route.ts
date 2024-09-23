import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const options: any = {
  method: "POST",
  url: "https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.KEY,
    "X-RapidAPI-Host": "chatgpt-best-price.p.rapidapi.com",
  },
  data: {
    model: "gpt-3.5-turbo",
    messages: [],
  },
};

export async function POST(request: Request) {
  options.data.messages = await request.json();
  const respone = await axios.request(options);
  return NextResponse.json(respone.data);
}
