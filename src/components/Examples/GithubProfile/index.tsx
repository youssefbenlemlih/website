import ExampleTemplate from "@/components/Examples/ExampleTemplate";
import { Component } from "./Component";

const code = `import React, { useState, useEffect } from "react";

const GithubProfile = ({ username }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(\`https://api.github.com/users/\${username}\`);
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchProfile();
// depends on username. 
// the effect will run each time it changes
  }, [username]);

  return (
    <div>
      {profileData ? (
        <div>
          <h2>{profileData.login}</h2>
          <img src={profileData.avatar_url} alt={\`\${profileData.login}'s avatar\`} />
          <p>{profileData.bio}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default GithubProfile;`;
export const GithubProfile = () => (
  <ExampleTemplate code={code} component={<Component />} />
);
