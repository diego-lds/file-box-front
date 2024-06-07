import React from "react";

const UserProfile = ({ name, photo }) => {
  return (
    <div className="flex items-center justify-around  p-2 bg-white  rounded-lg w-1/5">
      <div className="ml-4">
        <span>{name}</span>
      </div>
      <img src={photo} alt="User Profile" className="size-8 rounded-full " />
    </div>
  );
};

export default UserProfile;
