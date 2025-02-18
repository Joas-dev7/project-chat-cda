import React from 'react';
import { ChatMessage } from './ChatMessage';

interface ChatAreaProps {
  selectedContact: any;
}

export const ChatArea: React.FC<ChatAreaProps> = ({ selectedContact }) => {
  return (
    <main className="flex-1 overflow-y-auto p-4">
      {selectedContact ? (
        <div className="space-y-4">
          <ChatMessage
            message="Bonjour, comment allez-vous ?"
            createdAt={new Date()}
            displayName="John Doe"
            photoURL={`https://api.dicebear.com/7.x/avataaars/svg?seed=john`}
            isCurrentUser={false}
          />
          <ChatMessage
            message="Je vais bien, merci ! Et vous ?"
            createdAt={new Date()}
            displayName="Vous"
            photoURL={`https://api.dicebear.com/7.x/avataaars/svg?seed=you`}
            isCurrentUser={true}
          />
        </div>
      ) : (
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-500">Sélectionnez un contact pour commencer à discuter</p>
        </div>
      )}
    </main>
  );
};