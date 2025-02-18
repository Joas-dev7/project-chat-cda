import React from 'react';
import { Users, LogOut } from 'lucide-react';
import { ContactList } from './ContactList';

interface SidebarProps {
  isMobileMenuOpen: boolean;
  onSignOut: () => void;
  onSelectContact: (contact: any) => void;
  selectedContact: any;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isMobileMenuOpen,
  onSignOut,
  onSelectContact,
  selectedContact,
}) => {
  return (
    <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block md:w-80 bg-white border-r`}>
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="w-6 h-6 text-blue-500" />
            <h2 className="text-xl font-semibold ml-2">Contacts</h2>
          </div>
          <button
            onClick={onSignOut}
            className="text-gray-700 hover:text-gray-900"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
      <ContactList
        onSelectContact={onSelectContact}
        selectedContact={selectedContact}
      />
    </div>
  );
};