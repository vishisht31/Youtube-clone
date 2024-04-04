import React, { useEffect, useState } from "react";
import VideoPlayer from "../Components/VideoPlayer";
import RelatedVideos from "../Components/RelatedVideos";
import { useParams} from "react-router-dom";

function Video() {

  const { categoryID, id } = useParams();
  let API_KEY = process.env.REACT_APP_API_KEY;
  const [vidData, setVidData] = useState(null);
  const [relatedData, setRelatedData] = useState([]);


  const getVideoDetails = async () => {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&maxResults=50&regionCode=IN&key=${API_KEY}`
    );
    res = await res.json();
    res = res.items[0];
    setVidData(res);
  };

  const getData = async () => {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=30&regionCode=IN&videoCategoryId=${categoryID}&key=${API_KEY}`
    );
    res = await res.json();
    setRelatedData(res.items);
  };
  
  useEffect(() => {
    getVideoDetails();
    getData();
  }, [id]);

  return (
    <>
      <div className="flex justify-center gap-6 mt-4">
        <VideoPlayer vidData={vidData} relatedData={relatedData} />

        <div className="w-[30%] hidden lg:block">
          <RelatedVideos relatedData={relatedData} />
        </div>
      </div>
    </>
  );
}

export default Video;
