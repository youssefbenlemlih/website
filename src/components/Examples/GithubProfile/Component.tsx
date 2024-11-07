"use client";
import { useEffect, useState } from "react";
import { P } from "@/components";

export function Component() {
  const [userName, setUserName] = useState("youssefbenlemlih");
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`,
        );
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchProfile();
    // depends on username.
    // the effect will run each time it changes
  }, [userName]);

  return (
    <div>
      <P>👇Enter your Github handle</P>
      <input
        placeholder={"E.g. Jane Doe"}
        className={
          "mb-4 rounded-md border-2 border-aqua-500  p-2 text-aqua-500"
        }
        type={"text"}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {profileData ? (
        <div className={"flex gap-4"}>
          <img
            className={"h-20 w-20 rounded-md"}
            src={profileData.avatar_url}
            alt={`${profileData.login}'s avatar`}
          />
          <div>
            <p>Name: {profileData.login}</p>
            <p>Location: {profileData.location}</p>
            <p>Public Repos: {profileData.public_repos}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
