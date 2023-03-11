import React, { useState, useEffect } from 'react';

function ProfilePicture(props) {
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const getProfilePicture = async () => {
      const response = await fetch(`https://people.googleapis.com/v1/people/${props.email}?personFields=photos&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
      const data = await response.json();

      if (data.photos && data.photos.length > 0) {
        setProfilePicture(data.photos[0].url);
      }
    };

    getProfilePicture();
  }, [props.email]);

  if (!profilePicture) {
    return null;
  }

  return (
    <img src={profilePicture} alt="Profile picture" />
  );
}
