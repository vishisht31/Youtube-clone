import React from "react";

function Loading({ loading }) {
  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#0f0f0f] bg-opacity-70 z-50">
          <div className="border-t-4 border-[#ababab] border-solid rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}
    </>
  );
}

export default Loading;
