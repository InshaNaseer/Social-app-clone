export interface User {
  id: string;
  username: string;
  fullName: string;
  profileImage: string;
  bio?: string;
  following: number;
  followers: number;
  isVerified?: boolean;
}

export interface Story {
  id: string;
  user: User;
  imageUrl: string;
  viewed: boolean;
  createdAt: string;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  likes: number;
  createdAt: string;
}

export interface Post {
  id: string;
  user: User;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
  createdAt: string;
  liked?: boolean;
  saved?: boolean;
}