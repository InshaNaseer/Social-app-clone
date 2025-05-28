import React, { useState } from 'react';
import { Grid, Bookmark, Heart } from 'lucide-react';
import { posts } from '../data/mockData';
import { User } from '../types';

interface ProfilePostsProps {
  user: User;
}

const ProfilePosts: React.FC<ProfilePostsProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('posts');
  
  // Filter posts by user
  const userPosts = posts.filter(post => post.user.id === user.id);

  return (
    <div className="container mx-auto px-4">
      {/* Tabs */}
      <div className="flex justify-center border-t border-gray-200">
        <button
          className={`flex items-center px-4 py-3 space-x-1 ${
            activeTab === 'posts' 
              ? 'text-black border-t border-black' 
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('posts')}
        >
          <Grid size={12} />
          <span className="text-xs uppercase font-semibold">Posts</span>
        </button>
        <button
          className={`flex items-center px-4 py-3 space-x-1 ${
            activeTab === 'saved' 
              ? 'text-black border-t border-black' 
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('saved')}
        >
          <Bookmark size={12} />
          <span className="text-xs uppercase font-semibold">Saved</span>
        </button>
        <button
          className={`flex items-center px-4 py-3 space-x-1 ${
            activeTab === 'tagged' 
              ? 'text-black border-t border-black' 
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('tagged')}
        >
          <Heart size={12} />
          <span className="text-xs uppercase font-semibold">Tagged</span>
        </button>
      </div>

      {/* Grid of posts */}
      <div className="grid grid-cols-3 gap-1 mt-1">
        {activeTab === 'posts' && userPosts.map(post => (
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
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span className="font-semibold">{post.comments.length}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state for other tabs */}
      {activeTab !== 'posts' && (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="border-2 border-black rounded-full p-4 mb-4">
            {activeTab === 'saved' ? (
              <Bookmark size={32} />
            ) : (
              <Heart size={32} />
            )}
          </div>
          <h2 className="text-2xl font-light mb-1">
            {activeTab === 'saved' ? 'Save' : 'Photos of you'}
          </h2>
          <p className="text-sm text-center max-w-xs text-gray-500">
            {activeTab === 'saved' 
              ? 'Save photos and videos that you want to see again.' 
              : 'When people tag you in photos, they\'ll appear here.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfilePosts;