import React, { useEffect, useState } from "react";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import Comments from "./Comments";
import RelatedVideos from "./RelatedVideos";
import moment from "moment";
import { ViewConverter } from "../Utils/ViewConverter";

function VideoPlayer({ vidData, relatedData }) {
  let API_KEY = process.env.REACT_APP_API_KEY;
  const [channelinf, setChannelinf] = useState(null);

  const getChannel2 = async () => {
    if (vidData && vidData.snippet) {
      let res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${vidData.snippet.channelId}&key=${API_KEY}`
      );
      res = await res.json();
      setChannelinf(res.items[0]);
    }
  };

  useEffect(() => {
    getChannel2();
  }, [vidData]);

  return (
    <div className="rounded-lg h-full  w-[75%] lg:w-[60%] min-h-[calc(100vh-56px)] flex flex-col gap-3 text-white">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${vidData?.id}/?autoplay=1`}
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p className=" font-semibold text-2xl  ">{vidData?.snippet.title} </p>
      <div className="flex justify-between ">
        <div className="flex gap-4">
          <img
            className="w-10 h-10 rounded-full"
            src={channelinf?.snippet.thumbnails.medium.url}
            alt="profile"
          ></img>
          <div>
            <p className=" text-md font-semibold ">
              {vidData?.snippet?.channelTitle}
            </p>
            <p className=" text-xs text-[#ababab]">
              {ViewConverter(channelinf?.statistics.subscriberCount)}{" "}
              subscribers
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-white rounded-full text-sm text-black px-2 py-2 font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        <div className=" gap-4 items-center hidden md:flex ">
          <div className="flex gap-3 bg-[#262626] items-center rounded-full min-w-fit h-fit py-2 px-3">
            <img className="h-6 w-6 " src={like} alt="profile"></img>
            <p className="pr-2 border-r-2  border-white border-opacity-30 ">
              {ViewConverter(vidData?.statistics?.likeCount)}{" "}
            </p>
            <img className="h-6 w-6 " src={dislike} alt="profile"></img>
          </div>
          <div className="flex gap-2 bg-[#262626] items-center rounded-full min-w-fit h-fit py-2 px-4">
            <img src={share} alt="profile" className="h-6 w-6 "></img>
            <p>Share</p>
          </div>
          <div className="hidden lg:flex gap-2 bg-[#262626] items-center rounded-full min-w-fit h-fit py-2 px-4">
            <img src={save} alt="profile" className="h-6 w-6 "></img>
            <p>Save</p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#262626] w-full min-h-fit rounded-xl p-3 flex flex-col gap-2 mt-2">
        <div className="flex gap-2">
          <p className=" text-sm font-medium">
            {ViewConverter(vidData?.statistics?.viewCount)} views
          </p>
          <p className=" text-sm font-medium">
            {moment(vidData?.snippet?.publishedAt).fromNow()}
          </p>
        </div>

        <div>
          <p className="text-sm line-clamp-4">
            {vidData?.snippet?.description}
          </p>
        </div>
      </div>
      <div className=" lg:hidden">
        <RelatedVideos relatedData={relatedData} />
      </div>
      <div>
        <Comments vidData={vidData} />
      </div>
    </div>
  );
}

export default VideoPlayer;
