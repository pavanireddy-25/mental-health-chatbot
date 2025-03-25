import React, { useState } from 'react';
import { Message, SupportOption } from './types';
import { ChatMessage } from './components/ChatMessage';
import { SupportOptions } from './components/SupportOptions';
import { Send } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    content: "Hello! I'm here to listen and support you. How are you feeling today?",
    sender: 'bot',
    timestamp: new Date()
  }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand how you're feeling. Would you like to explore this further or try some coping strategies?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleOptionSelect = (option: SupportOption) => {
    const message: Message = {
      id: Date.now().toString(),
      content: `I'd like help with ${option.label.toLowerCase()}.`,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I'm here to help you with ${option.label.toLowerCase()}. Let's start by talking about what's on your mind.`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 bg-blue-600 text-white">
            <h1 className="text-xl font-semibold">Mental Health Support Chat</h1>
            <p className="text-blue-100 text-sm">Your safe space for emotional support</p>
          </div>

          <div className="h-[500px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>

            {messages.length === 1 && (
              <SupportOptions onSelect={handleOptionSelect} />
            )}

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message here..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                           transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500 text-center">
                Note: This is a demo chatbot. For serious mental health concerns, 
                please contact a mental health professional or emergency services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;