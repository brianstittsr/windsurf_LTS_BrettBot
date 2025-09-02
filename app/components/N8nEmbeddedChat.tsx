'use client'

import { useEffect } from 'react'

export default function N8nEmbeddedChat() {
  useEffect(() => {
    // Create and append the n8n chat script
    const script = document.createElement('script')
    script.type = 'module'
    script.defer = true
    script.innerHTML = `
      import Chatbot from "https://cdn.n8nchatui.com/v1/embed.js";
      Chatbot.init({
        "n8nChatUrl": "https://n8n.mynewpie.com/webhook/53c136fe-3e77-4709-a143-fe82746dd8b6/chat",
        "metadata": {},
        "theme": {
          "button": {
            "backgroundColor": "#16a34a",
            "right": 20,
            "bottom": 20,
            "size": 50,
            "iconColor": "#ffffff",
            "customIconSrc": "/lts-logo.png",
            "customIconSize": 40,
            "customIconBorderRadius": 15,
            "autoWindowOpen": {
              "autoOpen": false,
              "openDelay": 2
            },
            "borderRadius": "rounded"
          },
          "tooltip": {
            "showTooltip": true,
            "tooltipMessage": "Hi! I'm Brett, your LTS manufacturing expert 👋",
            "tooltipBackgroundColor": "#f0fdf4",
            "tooltipTextColor": "#166534",
            "tooltipFontSize": 14
          },
          "chatWindow": {
            "borderRadiusStyle": "rounded",
            "avatarBorderRadius": 25,
            "messageBorderRadius": 8,
            "showTitle": true,
            "title": "LTS Solutions - Brett",
            "titleAvatarSrc": "/lts-logo.png",
            "avatarSize": 40,
            "welcomeMessage": "Hi! I'm Brett, your LTS manufacturing expert. I'll help you identify the best lean solutions for your facility. Let's start with a quick assessment: What type of manufacturing do you do, and what's your biggest operational challenge right now?",
            "errorMessage": "I'm having trouble connecting right now. Please try again in a moment.",
            "backgroundColor": "#ffffff",
            "height": 600,
            "width": 400,
            "fontSize": 14,
            "starterPrompts": [
              "What type of manufacturing do you do?",
              "What's your biggest operational challenge?",
              "Tell me about your current systems",
              "How do you measure productivity?"
            ],
            "starterPromptFontSize": 13,
            "renderHTML": false,
            "clearChatOnReload": false,
            "showScrollbar": false,
            "botMessage": {
              "backgroundColor": "#16a34a",
              "textColor": "#ffffff",
              "showAvatar": true,
              "avatarSrc": "/brett.jpg",
              "showCopyToClipboardIcon": false
            },
            "userMessage": {
              "backgroundColor": "#f0fdf4",
              "textColor": "#166534",
              "showAvatar": true,
              "avatarSrc": "https://www.svgrepo.com/show/532363/user-alt-1.svg"
            },
            "textInput": {
              "placeholder": "Tell me about your manufacturing challenges...",
              "backgroundColor": "#ffffff",
              "textColor": "#1f2937",
              "sendButtonColor": "#16a34a",
              "maxChars": 500,
              "maxCharsWarningMessage": "Please keep your message under 500 characters.",
              "autoFocus": false,
              "borderRadius": 8,
              "sendButtonBorderRadius": 50
            },
            "uploadsConfig": {
              "enabled": false,
              "acceptFileTypes": [],
              "maxFiles": 0,
              "maxSizeInMB": 0
            },
            "voiceInputConfig": {
              "enabled": false,
              "maxRecordingTime": 0,
              "recordingNotSupportedMessage": ""
            }
          }
        }
      });
    `

    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[type="module"][defer]')
      if (scriptToRemove && scriptToRemove.innerHTML.includes('n8nchatui.com')) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return null
}
