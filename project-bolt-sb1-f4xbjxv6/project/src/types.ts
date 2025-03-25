export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface SupportOption {
  id: string;
  label: string;
  description: string;
  icon: string;
}