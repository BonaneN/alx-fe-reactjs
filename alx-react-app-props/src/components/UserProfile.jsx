// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext'; // Adjust path if needed

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <p>Name: {user.name}</p>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default UserProfile;
