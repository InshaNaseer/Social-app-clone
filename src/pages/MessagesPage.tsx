import React from 'react';
import { users } from '../data/mockData';

const MessagesPage: React.FC = () => {
  return (
    <div className="container mx-auto pt-20 px-4">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-[calc(100vh-100px)]">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200 h-full overflow-y-auto">
            <div className="border-b border-gray-200 p-4">
              <h1 className="font-semibold text-center">Direct</h1>
            </div>
            
            {users.map((user) => (
              <div 
                key={user.id} 
                className="flex items-center space-x-3 p-4 hover:bg-gray-50 cursor-pointer"
              >
                <img 
                  src={user.profileImage} 
                  alt={user.username} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{user.username}</div>
                  <div className="text-gray-500 text-sm">Active now</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Message Area */}
          <div className="w-2/3 flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center text-center p-4">
              <div>
                <div className="w-24 h-24 rounded-full border-2 border-black p-4 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" width="44" height="44" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl font-light mb-1">Your Messages</h2>
                <p className="text-gray-500 text-sm mb-4">
                  Send private photos and messages to a friend or group
                </p>
                <button className="bg-blue-500 text-white px-4 py-1 rounded font-semibold">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;