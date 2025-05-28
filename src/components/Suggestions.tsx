import React from 'react';
import { users, currentUser } from '../data/mockData';

const Suggestions: React.FC = () => {
  // Get users except current user
  const suggestedUsers = users.filter(user => user.id !== currentUser.id).slice(0, 5);

  return (
    <div className="sticky top-20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img 
            src={currentUser.profileImage} 
            alt={currentUser.username} 
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold">{currentUser.username}</div>
            <div className="text-gray-500 text-sm">{currentUser.fullName}</div>
          </div>
        </div>
        <button className="text-blue-500 text-xs font-semibold">Switch</button>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-500 font-semibold text-sm">Suggestions For You</span>
          <button className="text-xs font-semibold">See All</button>
        </div>

        {suggestedUsers.map(user => (
          <div key={user.id} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <img 
                src={user.profileImage} 
                alt={user.username} 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold">{user.username}</div>
                <div className="text-gray-500 text-xs">Followed by others</div>
              </div>
            </div>
            <button className="text-blue-500 text-xs font-semibold">Follow</button>
          </div>
        ))}
      </div>

      <div className="text-xs text-gray-400">
        <div className="mb-3">
          About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language
        </div>
        <div>
          © 2025 INSTAGRAM FROM META
        </div>
      </div>
    </div>
  );
};

export default Suggestions;