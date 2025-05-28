import React from 'react';
import Story from './Story';
import { stories } from '../data/mockData';

const Stories: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {stories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default Stories;