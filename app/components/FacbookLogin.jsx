// app/components/FacebookLoginButton.js

"use client";

const FacebookLoginButton = () => {
  const clientId = '1607381236655648'
  const redirectUri = "http://localhost:3000/facebook-callback";

  const handleLogin = () => {
    const loginUrl = `https://www.facebook.com/v16.0/dialog/oauth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token`;

    // Redirect the user to Facebook's login page
    window.location.href = loginUrl;
  };

  return (
    <button onClick={handleLogin}>
      Login with Facebook
    </button>
  );
};

export default FacebookLoginButton;
