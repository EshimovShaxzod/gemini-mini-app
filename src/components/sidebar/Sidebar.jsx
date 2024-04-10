import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extended, setExtends] = useState(false);

  return (
    <div className="inline-flex flex-col justify-between min-h-[100vh] shadow-lg px-6 py-6">
      <div className="top">
        <img  onClick={() => setExtends(!extended)}
          className="w-[30px] mb-8 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
        <div
          className={`inline-flex items-center justify-center border-2 gap-4 px-3 py-2 rounded-md cursor-pointer`}
        >
          <img className="w-[20px]" src={assets.plus_icon} alt="" />
          {extended ? <p>New chat</p> : null}
        </div>

        {extended ? (
          <div className="flex flex-col mt-8">
            <p className="mb-4">Recent</p>
            <div className="flex items-center gap-5 px-2 py-3 rounded-md">
              <img className="w-[20px]" src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
