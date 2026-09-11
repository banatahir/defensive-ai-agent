// 1. Import dependencies
const { OpenAI } = require('openai');
require('dotenv').config();

// 2. Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'dummy_key'
});

// 3. System Prompt (Defensive Rules)
const SYSTEM_PROMPT = `
You are a defensive AI agent.
Always adhere to these defensive programming rules:
1. Validate DOM elements exist before manipulation.
2. Wrap async code in try...catch blocks.
3. Keep responses concise and practical.
`;

// 4. Main Agent Function
async function runAgent(userPrompt) {
    try {
        console.log("🤖 Agent is thinking...\n");

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: userPrompt }
            ],
        });

        console.log("💡 Agent Response:");
        console.log(response.choices[0].message.content);

    } catch (error) {
        console.error("⚠️ Defensive Error Handler caught an issue:");
        console.error(error.message);
    }
}

// Test call
runAgent("How to defensively access a DOM element in JS?");