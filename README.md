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
   cd my-ai-agent