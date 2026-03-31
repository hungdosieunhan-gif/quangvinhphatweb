import { NextResponse } from 'next/server';
import { chatbotConfig } from '../chatbot-config';

// Make sure to add OPENAI_API_KEY in your .env or .env.local file

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
    }

    // Format the system prompt to be the first message sent to OpenAI
    const apiMessages = [
      { role: 'system', content: chatbotConfig.getSystemPrompt() },
      ...messages
    ];

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    if (!OPENAI_API_KEY) {
      console.error("Missing OPENAI_API_KEY environment variable");
      return NextResponse.json({ error: 'OpenAI configureation missing on server' }, { status: 500 });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: chatbotConfig.modelName,
        messages: apiMessages,
        temperature: chatbotConfig.temperature,
        max_tokens: chatbotConfig.maxTokens,
      })
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('Error from OpenAI API:', err);
      return NextResponse.json({ error: 'Failed to communicate with AI' }, { status: 502 });
    }

    const data = await response.json();
    const botReply = data.choices[0].message.content;

    return NextResponse.json({ reply: botReply }, { status: 200 });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
