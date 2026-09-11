<<<<<<< HEAD
# 🤖 Autonomous Node.js AI Agent with Tool Calling

An interactive CLI-based AI agent built using Node.js and the Google Gemini API (`@google/generative-ai`). The agent leverages dynamic Function Calling to safely execute operations on the local file system in real time.

## 🌟 Key Features
- **Interactive CLI Interface**: Powered by Node.js `readline` for direct user interaction.
- **Dynamic Tool Execution**: Mapped to native File System (`fs`) methods (`createFile`, `readFile`, `listFiles`, `deleteFile`).
- **Autonomous Decision Making**: Uses Gemini to determine when tool execution is necessary based on natural language input.
- **Modern ES Module Architecture**: Standardized with ES Modules (`type: module`).

## 🛠️ Tech Stack
- **Runtime**: Node.js (v24+)
- **SDK**: `@google/generative-ai`
- **Environment**: `dotenv`
- **Model**: `gemini-3.6-flash`

## 🚀 How to Run

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/my-ai-agent.git](https://github.com/your-username/my-ai-agent.git)
=======
# Defensive AI Agent Node.js Template

A resilient and secure local AI agent template built with Node.js and OpenAI API, adhering to defensive programming patterns.

## 🛡️ Key Features & Defensive Architecture
- **Error Resilience:** Wrapped API interactions in `try...catch` blocks to ensure graceful handling of network or API issues without crashing.
- **Security:** Decoupled sensitive configuration using `.env` files to prevent API key exposure.
- **Custom System Instructions:** Enforces defensive code review practices via structured `SYSTEM_PROMPT`.

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
>>>>>>> 6c7db6b3a580b418b4b627970abf37c8027936cb
   cd my-ai-agent