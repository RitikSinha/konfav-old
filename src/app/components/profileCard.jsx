import React from "react";
import Image from "next/image";
const ProfileCard = () => {
  return (
    <div className="flex items-center m-3">
      <div className="avatar mr-3">
        <div className="w-16 rounded-full">
          <Image
            src="https://randomuser.me/api/portraits/men/85.jpg"
            alt="profile"
            width="75"
            height="75"
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl text-opacity-80">Jhon Doe</h2>
        <p className="text-sm">Web Developer</p>
      </div>
    </div>
  );
};

export default ProfileCard;
