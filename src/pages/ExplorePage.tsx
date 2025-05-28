import React from 'react';
import { posts } from '../data/mockData';
import { Heart, MessageCircle } from 'lucide-react';

const ExplorePage: React.FC = () => {
  // Duplicate and shuffle posts to create more content for explore page
  const explorePosts = [...posts, ...posts, ...posts]
    .map((post) => ({ ...post, id: post.id + Math.random().toString() }))
    .sort(() => Math.random() - 0.5);

  return (
    <div className="container mx-auto pt-20 px-2">
      <div className="grid grid-cols-3 gap-1">
        {explorePosts.map(post => (
          <div key={post.id} className="aspect-square relative group cursor-pointer">
            <img 
              src={post.imageUrl} 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
              <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="flex items-center text-white">
                  <Heart size={18} className="fill-white mr-1" />
                  <span className="font-semibold">{post.likes}</span>
                </div>
                <div className="flex items-center text-white">
                  <MessageCircle size={18} className="fill-white mr-1" />
                  <span className="font-semibold">{post.comments.length}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;