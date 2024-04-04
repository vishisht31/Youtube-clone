import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import Video from "./Views/Video";
import { Route, Routes } from "react-router-dom";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryID, setcategoryID] = useState("");
  console.log(process.env);
  return (
    <div className="App">
      <Navbar
        setShowSidebar={setShowSidebar}
        setData={setData}
        categoryID={categoryID}
        setcategoryID={setcategoryID}
        setLoading={setLoading}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              showSidebar={showSidebar}
              data={data}
              setData={setData}
              categoryID={categoryID}
              setcategoryID={setcategoryID}
              setLoading={setLoading}
              loading={loading}
            />
          }
        />
        <Route path="/video/:categoryID/:id" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
