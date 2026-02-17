import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  assistant: {
    // AI model (uses AI SDK Gateway format)
    model: 'google/gemini-3-flash',

    // MCP server (path or URL)
    mcpServer: '/mcp',
  }
})
