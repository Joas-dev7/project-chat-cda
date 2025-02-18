import React from 'react';

interface ContactListProps {
  onSelectContact: (contact: any) => void;
  selectedContact: any;
}

export const ContactList: React.FC<ContactListProps> = ({
  onSelectContact,
  selectedContact,
}) => {
  const mockContacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'En ligne' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Hors ligne' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'En ligne' },
  ];

  return (
    <div className="overflow-y-auto h-[calc(100vh-73px)]">
      {mockContacts.map((contact) => (
        <button
          key={contact.id}
          onClick={() => onSelectContact(contact)}
          className={`w-full p-4 flex items-center hover:bg-gray-50 ${
            selectedContact?.id === contact.id ? 'bg-blue-50' : ''
          }`}
        >
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${contact.email}`}
            alt={contact.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3 text-left">
            <p className="font-medium">{contact.name}</p>
            <p className="text-sm text-gray-500">{contact.status}</p>
          </div>
        </button>
      ))}
    </div>
  );
};