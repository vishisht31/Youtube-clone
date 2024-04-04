import React from "react";
import Sidebar from "../Components/Sidebar";
import Feeds from "../Components/Feeds";


function Home({
  showSidebar,
  data,
  setData,
  categoryID,
  setcategoryID,
  setLoading,
  loading,
}) {
  return (
    <>
      <div className="flex">
        <Sidebar
          showSidebar={showSidebar}
          setcategoryID={setcategoryID}
          data={data}
        />
        <Feeds
          categoryID={categoryID}
          data={data}
          setData={setData}
          setLoading={setLoading}
          loading={loading}
        />
      </div>
    </>
  );
}

export default Home;
