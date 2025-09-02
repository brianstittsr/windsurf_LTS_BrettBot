# N8N ChatBot Integration Setup

This document explains how to configure the LTS BrettBot to work with n8n workflows instead of AnythingLLM.

## Overview

The chatbot has been modified to integrate with n8n via webhook endpoints. This allows you to create custom workflows in n8n that can process chat messages, integrate with external APIs, databases, and other services.

## Setup Instructions

### 1. Environment Configuration

Create a `.env.local` file in the project root with the following variables:

```env
NEXT_PUBLIC_N8N_API_URL=https://your-n8n-instance.com/webhook
NEXT_PUBLIC_N8N_WEBHOOK_ID=your-webhook-id
NEXT_PUBLIC_N8N_API_KEY=your-api-key-optional
```

### 2. N8N Workflow Setup

Create a workflow in n8n with the following structure:

1. **Webhook Trigger Node**
   - Method: POST
   - Path: `/webhook/your-webhook-id`
   - Response Mode: Respond to Webhook

2. **Process Message Node** (HTTP Request, Function, or other nodes)
   - Process the incoming message
   - Generate appropriate response based on your business logic
   - Can integrate with OpenAI, Claude, or other AI services
   - Can query databases, CRM systems, etc.

3. **Response Node**
   - Return JSON response with this structure:
   ```json
   {
     "response": "Your bot response message",
     "sessionId": "session_identifier",
     "metadata": {
       "additional": "data"
     }
   }
   ```

### 3. Expected Request Format

The chatbot sends requests to your n8n webhook with this structure:

```json
{
  "message": "User's message",
  "sessionId": "unique_session_id",
  "userId": "web_user",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "context": {
    "timestamp": "2024-01-01T12:00:00.000Z",
    "source": "web_widget"
  }
}
```

### 4. Installation

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

## Features

- **Custom Chat Interface**: Modern, responsive chat widget
- **Session Management**: Maintains conversation context
- **Error Handling**: Graceful error handling with user-friendly messages
- **Configurable**: Easy to configure via environment variables
- **Extensible**: Can be extended with additional features

## N8N Workflow Examples

### Basic Echo Bot
```
Webhook → Function (return input message) → Respond to Webhook
```

### AI-Powered Bot
```
Webhook → HTTP Request (to OpenAI) → Function (format response) → Respond to Webhook
```

### Database Integration
```
Webhook → MySQL (query data) → Function (format response) → Respond to Webhook
```

## Troubleshooting

1. **Chat widget shows "not configured"**: Check your environment variables
2. **No response from bot**: Verify your n8n webhook URL and that the workflow is active
3. **401 Unauthorized**: Check your API key configuration
4. **Timeout errors**: Ensure your n8n workflow responds within 30 seconds

## Migration from AnythingLLM

The old `ChatWidget.tsx` component has been replaced with `N8nChatWidget.tsx`. The new component provides:

- Better error handling
- Custom UI that matches your brand
- More flexibility for integrations
- Session management
- Configurable responses

## Security Considerations

- Use HTTPS for your n8n instance
- Implement proper authentication if needed
- Validate input data in your n8n workflows
- Consider rate limiting for production use
