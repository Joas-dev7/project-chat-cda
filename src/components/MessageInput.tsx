import React from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
  message: string;
  onMessageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  message,
  onMessageChange,
  onSubmit,
}) => {
  return (
    <footer className="bg-white border-t p-4">
      <form onSubmit={onSubmit} className="flex space-x-4">
        <input
          type="text"
          value={message}
          onChange={onMessageChange}
          placeholder="Écrivez votre message..."
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </footer>
  );
};