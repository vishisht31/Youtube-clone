import React from "react";

function Subscriptions({ showSidebar, name, logo }) {
  return (
    <div className="w-full text-white h-11  rounded-lg  hover:bg-[#262626] flex items-center">
      <img src={logo} alt={name} className="h-6 w-6 mx-2 rounded-full"></img>
      <p
        className={`ml-4 font-medium text-base line-clamp-1 ${
          showSidebar ? "" : "hidden"
        } `}
      >
        {name}
      </p>
    </div>
  );
}

export default Subscriptions;
