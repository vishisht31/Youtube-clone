import React, { useEffect, useState } from "react";
import ThumbnailCard from "./ThumbnailCard";
import Loading from "./Loading";

function Feeds({
  categoryID,
  data,
  setData,
  setLoading,
  loading,
}) {
  let API_KEY = process.env.REACT_APP_API_KEY;
  const getData = async () => {
    setLoading(true);
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&${
        categoryID ? `videoCategoryId=${categoryID}` : ""
      }&regionCode=IN&key=${API_KEY}`
    );
    res = await res.json();
    setData(res.items);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [categoryID]);

  return (
    <div className="relative max-h-[calc(100vh-56px)] w-full text-white  p-3 overflow-y-auto ">
      <Loading loading={loading} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-4 p-5">
        {data.map((item, idx) => (
          <div key={idx}>
            <ThumbnailCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feeds;
