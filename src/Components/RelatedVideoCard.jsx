import React from "react";
import { ViewConverter } from "../Utils/ViewConverter";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function RelatedVideoCard({ item }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(
          `/video/${item.snippet.categoryId ? item.snippet.categoryId : 0}/${
            item.id
          }`
        );
      }}
      className="cursor-pointer w-full  min-h-24  flex text-white mb-4"
    >
      <div className="w-2/5  ">
        <img
          src={item.snippet.thumbnails.medium.url}
          alt="thumbnail"
          className="w-full h-full rounded-lg"
        ></img>
      </div>
      <div className="w-3/5 px-3">
        <p className=" text-md font-medium line-clamp-2 ">
          {item.snippet.title}
        </p>
        <p className=" text-[#ababab] text-sm mt-1 hover:text-white w-fit">
          {item.snippet.channelTitle}
        </p>
        <p className="text-[#ababab] text-xs mt-1">
          {ViewConverter(item.statistics.viewCount)} Views &bull;{" "}
          {moment(item.snippet.publishedAt).fromNow()}{" "}
        </p>
      </div>
    </div>
  );
}

export default RelatedVideoCard;
