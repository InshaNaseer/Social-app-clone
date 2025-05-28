import React from 'react';
import Post from './Post';
import Stories from './Stories';
import { posts } from '../data/mockData';
import Suggestions from './Suggestions';

const Feed: React.FC = () => {
  return (
    <div className="container mx-auto pt-20 px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-2/3">
          <Stories />
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="hidden md:block md:w-1/3">
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default Feed;