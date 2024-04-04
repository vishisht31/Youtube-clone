import React from "react";
import RelatedVideoCard from "./RelatedVideoCard";

function RelatedVideos({ relatedData }) {
  return (
    <div className="w-full min-h-[calc(100vh-56px)] px-2">
      {relatedData?.map((item, idx) => (
        <div key={idx}>
          <RelatedVideoCard item={item} />
        </div>
      ))}
    </div>
  );
}

export default RelatedVideos;
