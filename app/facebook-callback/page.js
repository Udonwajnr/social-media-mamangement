// app/facebook-callback/page.js
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const FacebookCallback = () => {
  const router = useRouter();

  useEffect(() => {
    // Get the access token from the URL hash
    const hash = window.location.hash;
    const accessToken = new URLSearchParams(hash.substring(1)).get('access_token');

    if (accessToken) {
      // Access token found, use it as needed
      console.log('Access Token:', accessToken);
      fetchFacebookProfile(accessToken);
    } else {
      console.error('Access token not found');
    }
  }, []);

  const fetchFacebookProfile = (accessToken) => {
    fetch(`https://graph.facebook.com/me?fields=name,email,picture&access_token=${accessToken}`)
      .then((response) => response.json())
      .then((profile) => {
        console.log('Facebook Profile:', profile);
        // Handle the profile data (e.g., store it in state or redirect the user)
      })
      .catch((error) => console.error('Error fetching profile:', error));
  };

  return (
    <div>
      <h1>Facebook Login Callback</h1>
      <p>Processing Facebook login...</p>
    </div>
  );
};

export default FacebookCallback;
