import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { Post as PostType } from '../types';
import { formatDistanceToNow } from '../utils/dateUtils';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [liked, setLiked] = useState(post.liked || false);
  const [saved, setSaved] = useState(post.saved || false);
  const [likes, setLikes] = useState(post.likes);
  const [showAllComments, setShowAllComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // In a real app, you would add the comment to the backend
      setNewComment('');
    }
  };

  const displayedComments = showAllComments 
    ? post.comments 
    : post.comments.slice(0, 2);

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-4 overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <img 
            src={post.user.profileImage} 
            alt={post.user.username} 
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center">
              <span className="font-semibold text-sm">{post.user.username}</span>
              {post.user.isVerified && (
                <span className="ml-1 text-blue-500">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-8 8z"/>
                  </svg>
                </span>
              )}
            </div>
          </div>
        </div>
        <button>
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Post Image */}
      <div className="relative">
        <img 
          src={post.imageUrl} 
          alt="Post" 
          className="w-full object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <button onClick={handleLike} className="focus:outline-none">
              <Heart 
                size={24} 
                className={`${liked ? 'text-red-500 fill-red-500' : 'text-black'} transition-colors`} 
              />
            </button>
            <button className="focus:outline-none">
              <MessageCircle size={24} />
            </button>
            <button className="focus:outline-none">
              <Send size={24} />
            </button>
          </div>
          <button onClick={handleSave} className="focus:outline-none">
            <Bookmark 
              size={24} 
              className={`${saved ? 'text-black fill-black' : 'text-black'} transition-colors`} 
            />
          </button>
        </div>

        {/* Likes */}
        <div className="font-semibold text-sm mb-1">{likes.toLocaleString()} likes</div>

        {/* Caption */}
        <div className="text-sm mb-2">
          <span className="font-semibold mr-1">{post.user.username}</span>
          {post.caption}
        </div>

        {/* Comments */}
        {post.comments.length > 0 && (
          <div className="mb-2">
            {post.comments.length > 2 && !showAllComments && (
              <button 
                className="text-gray-500 text-sm mb-1"
                onClick={() => setShowAllComments(true)}
              >
                View all {post.comments.length} comments
              </button>
            )}
            {displayedComments.map(comment => (
              <div key={comment.id} className="text-sm mb-1">
                <span className="font-semibold mr-1">{comment.user.username}</span>
                {comment.text}
              </div>
            ))}
          </div>
        )}

        {/* Timestamp */}
        <div className="text-gray-500 text-xs uppercase">
          {formatDistanceToNow(new Date(post.createdAt))}
        </div>
      </div>

      {/* Comment Input */}
      <form onSubmit={handleSubmitComment} className="flex items-center border-t border-gray-200 p-3">
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-grow text-sm focus:outline-none"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        {newComment.trim() && (
          <button 
            type="submit" 
            className="text-blue-500 font-semibold text-sm"
          >
            Post
          </button>
        )}
      </form>
    </div>
  );
};

export default Post;