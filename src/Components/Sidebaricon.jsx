import React from "react";

function Sidebaricon({ showSidebar, name, logo, category, setcategoryID }) {
  return (
    <div
      className="w-full text-white h-11  rounded-lg  hover:bg-[#262626] flex items-center cursor-pointer"
      onClick={() => setcategoryID(category)}
    >
      <img src={logo} alt={name} className="h-6 w-6 mx-2"></img>
      <h3 className={`ml-4 font-medium ${showSidebar ? "" : "hidden"} `}>
        {name}
      </h3>
    </div>
  );
}

export default Sidebaricon;
