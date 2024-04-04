import React, { useEffect, useState } from "react";
import moment from "moment";
import { ViewConverter } from "../Utils/ViewConverter";
import { useNavigate } from "react-router-dom";

const ThumbnailCard = ({ item }) => {
  const navigate = useNavigate();
  let API_KEY = process.env.REACT_APP_API_KEY;

  const [channelinfo, setchannelinfo] = useState([]);
  const getChannel = async () => {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${API_KEY}`
    );
    res = await res.json();
    setchannelinfo(res.items);
  };

  useEffect(() => {
    getChannel();
  }, [item]);

  return (
    <div
      className="flex flex-col mb-8 cursor-pointer"
      onClick={() =>
        navigate(
          `/video/${item.snippet.categoryId ? item.snippet.categoryId : 0}/${
            item.id.videoId ? item.id.videoId : item.id
          }`
        )
      }
    >
      <div className="relative   overflow">
        <img
          className="h-full w-full rounded-xl object-cover "
          src={item.snippet.thumbnails.medium.url}
          alt="t1"
        />
      </div>
      <div className="flex text-white mt-3 ">
        <div className="flex items-start">
          <div className="flex h-9 w-9 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-fill"
              src={channelinfo[0]?.snippet.thumbnails.medium.url}
              alt="user"
            />
          </div>
        </div>

        <div className="flex flex-col ml-3 overflow-hidden">
          <p className="text-md font-bold line-clamp-2 ">
            {item.snippet.title}
          </p>
          <p className="text-sm  mt-1 text-[#ababab] flex w-fit items-center hover:text-white  ">
            {item.snippet.channelTitle}
          </p>
          <div className="flex text-sm  text-[#ababab] truncate overflow-hidden ">
            <span>
              {ViewConverter(item.statistics?.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCard;
