import React, { useState } from 'react';
import { LoginForm } from './components/public/LoginForm';
import { Sidebar } from './components/secure/Sidebar';
import { ChatHeader } from './components/secure/ChatHeader';
import { ChatArea } from './components/secure/ChatArea';
import { MessageInput } from './components/secure/MessageInput';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleGoogleSignIn = () => {
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  const handleContactSelect = (contact: any) => {
    setSelectedContact(contact);
    setIsMobileMenuOpen(false);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setNewMessage('');
  };

  if (!isLoggedIn) {
    return (
      <LoginForm
        email={email}
        password={password}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleSignIn}
        onGoogleSignIn={handleGoogleSignIn}
      />
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        onSignOut={handleSignOut}
        onSelectContact={handleContactSelect}
        selectedContact={selectedContact}
      />

      <div className="flex-1 flex flex-col">
        <ChatHeader
          selectedContact={selectedContact}
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        <ChatArea selectedContact={selectedContact} />

        {selectedContact && (
          <MessageInput
            message={newMessage}
            onMessageChange={(e) => setNewMessage(e.target.value)}
            onSubmit={sendMessage}
          />
        )}
      </div>
    </div>
  );
}

export default App;