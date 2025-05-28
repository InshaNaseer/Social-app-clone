import React, { useState } from 'react';
import { User } from '../types';
import { Settings } from 'lucide-react';

interface ProfileHeaderProps {
  user: User;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      <div className="flex flex-col md:flex-row">
        {/* Profile Image */}
        <div className="flex justify-center md:w-1/3 mb-6 md:mb-0">
          <img 
            src={user.profileImage} 
            alt={user.username} 
            className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="md:w-2/3">
          <div className="flex items-center mb-4">
            <h1 className="text-xl font-light mr-4">{user.username}</h1>
            {user.id === '1' ? (
              <div className="flex space-x-2">
                <button className="bg-gray-100 px-3 py-1 rounded font-semibold text-sm">
                  Edit Profile
                </button>
                <button className="bg-gray-100 px-2 py-1 rounded">
                  <Settings size={18} />
                </button>
              </div>
            ) : (
              <button 
                onClick={handleFollowToggle}
                className={`px-6 py-1 rounded text-sm font-semibold ${
                  isFollowing 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-blue-500 text-white'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            )}
          </div>

          <div className="flex space-x-8 mb-4">
            <div>
              <span className="font-semibold">{user.followers}</span> followers
            </div>
            <div>
              <span className="font-semibold">{user.following}</span> following
            </div>
          </div>

          <div>
            <div className="font-semibold">{user.fullName}</div>
            {user.bio && <div className="text-sm">{user.bio}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;