import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ProfilePosts from '../components/ProfilePosts';
import { currentUser } from '../data/mockData';

const ProfilePage: React.FC = () => {
  return (
    <div>
      <ProfileHeader user={currentUser} />
      <ProfilePosts user={currentUser} />
    </div>
  );
};

export default ProfilePage;