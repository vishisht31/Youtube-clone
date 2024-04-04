import React from "react";
import Sidebaricon from "./Sidebaricon";
import Music from "../assets/music.png";
import Sports from "../assets/sports.png";
import Gaming from "../assets/game_icon.png";
import News from "../assets/news.png";
import Entertainment from "../assets/entertainment.png";
import Automobiles from "../assets/automobiles.png";
import Technology from "../assets/tech.png";
import Home from "../assets/home.png";
import Subscriptions from "./Subscriptions";

function Sidebar({ showSidebar, setcategoryID, data }) {
  const explorecategories = [
    { name: "Home", logo: Home, category: 0 },
    { name: "Music", logo: Music, category: 10 },
    { name: "Sports", logo: Sports, category: 17 },
    { name: "Gaming", logo: Gaming, category: 20 },
    { name: "News", logo: News, category: 25 },
    { name: "Entertainment", logo: Entertainment, category: 24 },
    { name: "Automobiles", logo: Automobiles, category: 2 },
    { name: "Technology", logo: Technology, category: 28 },
  ];

  return (
    <div className="SideBar relative max-h-[calc(100vh-56px)] w-fit text-white  p-3 overflow-y-auto hidden md:block">
      <div className="p-2">
        <h2 className={` font-semibold my-1 ${showSidebar ? "" : "hidden"} `}>
          Explore
        </h2>

        {explorecategories.map((ele, idx) => (
          <div key={idx}>
            <Sidebaricon
              showSidebar={showSidebar}
              name={ele.name}
              logo={ele.logo}
              category={ele.category}
              setcategoryID={setcategoryID}
            />
          </div>
        ))}
      </div>

      <hr className="my-4 w-4/5 mx-auto opacity-50 " />

      <div className="p-2">
        <h2 className={`font-semibold my-1 ${showSidebar ? "" : "hidden"}`}>
          Subscriptions
        </h2>

        {data &&
          data.slice(0, 5).map((item, idx) => (
            <div key={idx}>
              <Subscriptions
                showSidebar={showSidebar}
                name={item.snippet.channelTitle}
                logo={item.snippet.thumbnails.medium.url}
              />
            </div>
          ))}
      </div>

      <hr className="my-4 w-4/5 mx-auto opacity-50 " />
    </div>
  );
}

export default Sidebar;
