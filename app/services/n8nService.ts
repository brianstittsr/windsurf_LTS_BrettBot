import axios from 'axios';

export interface ChatMessage {
  id: string;
  message: string;
  timestamp: Date;
  isUser: boolean;
}

export interface N8nChatRequest {
  message: string;
  sessionId?: string;
  userId?: string;
  context?: any;
}

export interface N8nChatResponse {
  response: string;
  sessionId?: string;
  metadata?: any;
}

class N8nService {
  private apiUrl: string;
  private webhookId: string;
  private apiKey?: string;

  constructor() {
    this.apiUrl = process.env.NEXT_PUBLIC_N8N_API_URL || '';
    this.webhookId = process.env.NEXT_PUBLIC_N8N_WEBHOOK_ID || '';
    this.apiKey = process.env.NEXT_PUBLIC_N8N_API_KEY;
  }

  async sendMessage(request: N8nChatRequest): Promise<N8nChatResponse> {
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (this.apiKey) {
        headers['Authorization'] = `Bearer ${this.apiKey}`;
      }

      const payload = {
        message: request.message,
        sessionId: request.sessionId || this.generateSessionId(),
        userId: request.userId || 'anonymous',
        timestamp: new Date().toISOString(),
        context: request.context || {}
      };

      const response = await axios.post(
        `${this.apiUrl}/${this.webhookId}`,
        payload,
        {
          headers,
          timeout: 30000, // 30 second timeout
        }
      );

      return {
        response: response.data.response || response.data.message || 'No response received',
        sessionId: response.data.sessionId || payload.sessionId,
        metadata: response.data.metadata || {}
      };
    } catch (error: unknown) {
      console.error('N8n API Error:', error);
      
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          throw new Error('N8n webhook not found. Please check your webhook URL and ID.');
        } else if (error.response?.status === 401) {
          throw new Error('Unauthorized. Please check your API key.');
        } else if (error.code === 'ECONNABORTED') {
          throw new Error('Request timeout. The n8n service may be slow to respond.');
        }
      }
      
      throw new Error('Failed to communicate with n8n service. Please try again.');
    }
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  isConfigured(): boolean {
    return !!(this.apiUrl && this.webhookId);
  }
}

export const n8nService = new N8nService();
