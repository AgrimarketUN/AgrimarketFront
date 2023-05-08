import { PrivateGrid } from '@/common';
import React from 'react';

export interface ProfileProps {};

const Profile: React.FC<ProfileProps> = () => {
  return (
    <PrivateGrid>
      <h1>Profile</h1>
    </PrivateGrid>
  )
};

export default Profile;