import React from 'react';
import { formatRelative } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ChatMessageProps {
  message: string;
  createdAt: Date;
  displayName: string;
  photoURL: string;
  isCurrentUser: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  createdAt,
  displayName,
  photoURL,
  isCurrentUser,
}) => {
  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'} items-end max-w-[80%]`}>
        <img
          src={photoURL}
          alt="Avatar"
          className="w-8 h-8 rounded-full flex-shrink-0"
        />
        <div
          className={`mx-2 px-4 py-2 rounded-lg ${
            isCurrentUser
              ? 'bg-blue-500 text-white rounded-br-none'
              : 'bg-gray-200 rounded-bl-none'
          }`}
        >
          <p className="break-words">{message}</p>
          <p className="text-xs mt-1 opacity-70">
            {formatRelative(createdAt, new Date(), { locale: fr })}
          </p>
        </div>
      </div>
    </div>
  );
};