import React from 'react';
import { Users } from 'lucide-react';

interface ChatHeaderProps {
  selectedContact: any;
  onMobileMenuToggle: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  selectedContact,
  onMobileMenuToggle,
}) => {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button
          className="md:hidden mr-4 text-gray-700"
          onClick={onMobileMenuToggle}
        >
          <Users className="w-6 h-6" />
        </button>
        <div className="flex items-center">
          {selectedContact ? (
            <>
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedContact.email}`}
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 font-semibold">{selectedContact.name}</span>
            </>
          ) : (
            <span className="text-gray-500">Sélectionnez un contact</span>
          )}
        </div>
      </div>
    </header>
  );
};