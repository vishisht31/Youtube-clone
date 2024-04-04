import React from "react";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import { ViewConverter } from "../Utils/ViewConverter";
import moment from "moment";

function CommentCard({ item }) {
  return (
    <div className="flex gap-3 items-start mb-4">
      <div>
        <img
          src={item?.snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt="profile-pic"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-medium">
            {item?.snippet.topLevelComment.snippet.authorDisplayName}
          </p>
          <p className="text-[#ababab] text-xs">
            {moment(
              item?.snippet.topLevelComment.snippet.publishedAt
            ).fromNow()}
          </p>
        </div>
        <p className="text-sm line-clamp-3 ">
          {item?.snippet.topLevelComment.snippet.textDisplay}
        </p>
        <div className="flex items-center gap-2">
          <img src={like} alt="like" className="h-5 w-5"></img>
          <p className="text-sm text-[#ababab] font-medium">
            {ViewConverter(item?.snippet.topLevelComment.snippet.likeCount)}
          </p>
          <img src={dislike} alt="dislike" className="h-5 w-5 ml-3"></img>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
