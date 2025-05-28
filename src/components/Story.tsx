import React from 'react';
import { Story as StoryType } from '../types';

interface StoryProps {
  story: StoryType;
}

const Story: React.FC<StoryProps> = ({ story }) => {
  return (
    <div className="flex flex-col items-center space-y-1 cursor-pointer">
      <div className={`w-16 h-16 rounded-full p-[2px] ${story.viewed ? 'bg-gray-300' : 'bg-gradient-to-tr from-yellow-400 to-pink-600'}`}>
        <div className="bg-white p-[2px] rounded-full h-full w-full">
          <img 
            src={story.user.profileImage} 
            alt={story.user.username} 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-xs truncate max-w-[64px] text-center">
        {story.user.username}
      </span>
    </div>
  );
};

export default Story;