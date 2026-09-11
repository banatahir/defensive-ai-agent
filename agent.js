<<<<<<< HEAD
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import readline from 'readline';
import fs from 'fs';
import path from 'path';

dotenv.config();

// ١. پێناسکردنی ئامرازەکان (Tools)
const createFileTool = {
  name: 'createFile',
  description: 'Creates a new local file with specified filename and content.',
  parameters: {
    type: 'OBJECT',
    properties: {
      filename: { type: 'STRING', description: 'Name of the file to create' },
      content: { type: 'STRING', description: 'Text content to write into the file' }
    },
    required: ['filename', 'content']
  }
};

const readFileTool = {
  name: 'readFile',
  description: 'Reads content from a local file.',
  parameters: {
    type: 'OBJECT',
    properties: {
      filename: { type: 'STRING', description: 'Name of the file to read' }
    },
    required: ['filename']
  }
};

const listFilesTool = {
  name: 'listFiles',
  description: 'Lists all files in the current working directory.',
  parameters: {
    type: 'OBJECT',
    properties: {}
  }
};

const deleteFileTool = {
  name: 'deleteFile',
  description: 'Deletes a local file.',
  parameters: {
    type: 'OBJECT',
    properties: {
      filename: { type: 'STRING', description: 'Name of the file to delete' }
    },
    required: ['filename']
  }
};

// ٢. دابینکردنی مۆدێل بە ئامرازەکانەوە
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: 'gemini-3.6-flash',
  tools: [{ functionDeclarations: [createFileTool, readFileTool, listFilesTool, deleteFileTool] }],
  systemInstruction: 'You are an advanced interactive AI agent capable of reading, writing, listing, and deleting local files via function calls.'
});

// ٣. جێبەجێکردنی ئامرازەکان (Execution Logic)
function executeFunction(name, args) {
  try {
    if (name === 'createFile') {
      fs.writeFileSync(path.resolve(args.filename), args.content, 'utf8');
      return { success: true, message: `File "${args.filename}" created successfully.` };
    }
    if (name === 'readFile') {
      const filePath = path.resolve(args.filename);
      if (!fs.existsSync(filePath)) return { success: false, message: `File "${args.filename}" does not exist.` };
      return { success: true, content: fs.readFileSync(filePath, 'utf8') };
    }
    if (name === 'listFiles') {
      const files = fs.readdirSync(process.cwd());
      return { success: true, files: files };
    }
    if (name === 'deleteFile') {
      const filePath = path.resolve(args.filename);
      if (!fs.existsSync(filePath)) return { success: false, message: `File "${args.filename}" does not exist.` };
      fs.unlinkSync(filePath);
      return { success: true, message: `File "${args.filename}" deleted successfully.` };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log('====================================');
console.log('🤖 Advanced Autonomous AI Agent CLI');
console.log('Type your command (or "exit" to quit):');
console.log('====================================\n');

const chat = model.startChat();

function promptUser() {
  rl.question('👤 You: ', async (userInput) => {
    if (userInput.trim().toLowerCase() === 'exit') {
      console.log('\n👋 Goodbye!');
      rl.close();
      return;
    }

    try {
      const result = await chat.sendMessage(userInput);
      const call = result.response.functionCalls()?.[0];

      if (call) {
        console.log(`\n⚙️  [Agent Executing Tool]: ${call.name}(${JSON.stringify(call.args)})`);
        const toolResult = executeFunction(call.name, call.args);
        
        const finalResponse = await chat.sendMessage([
          {
            functionResponse: {
              name: call.name,
              response: toolResult
            }
          }
        ]);
        console.log(`\n🤖 Agent:\n${finalResponse.response.text()}\n`);
      } else {
        console.log(`\n🤖 Agent:\n${result.response.text()}\n`);
      }
    } catch (error) {
      console.log(`\n⚠️ Error: ${error.message}\n`);
    }

    promptUser();
  });
}

promptUser();
=======
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
>>>>>>> 6c7db6b3a580b418b4b627970abf37c8027936cb
