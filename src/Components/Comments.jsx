import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

function Comments({ vidData }) {
  let API_KEY = process.env.REACT_APP_API_KEY;
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    if (vidData) {
      let res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=25&order=relevance&videoId=${vidData.id}&key=${API_KEY}`
      );
      res = await res.json();
      setComments(res.items);
    }
  };

  useEffect(() => {
    getComments();
  }, [vidData]);

  return (
    <div className="text-white mt-3 flex flex-col gap-4 mb-10">
      <p className="text-xl font-semibold">
        {vidData?.statistics?.commentCount} Comments
      </p>
      {comments &&
        comments.map((item, idx) => (
          <div key={idx}>
            <CommentCard item={item} />
          </div>
        ))}
    </div>
  );
}

export default Comments;
