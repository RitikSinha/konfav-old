import React from "react";
import Image from "next/image";
const ProfileSqCard = () => {
  return (
    <div className="w-36 flex flex-col items-center text-center bg-base-300 p-2 rounded-lg m-2">
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
        <h2 className="text-xl text-opacity-80">Jhon Doe</h2>
        <p className="text-sm">Web Developer</p>
      </div>
    </div>
  );
};

export default ProfileSqCard;
