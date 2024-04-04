import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import logo from "../assets/Youtube.png";
import { IoIosSearch } from "react-icons/io";
import upload from "../assets/upload.png";
import notification from "../assets/notification.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  setShowSidebar,
  setData,
  categoryID,
  setcategoryID,
  setLoading,
}) => {
  let API_KEY = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const getSeacrhData = async () => {
    setLoading(true);
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchText}&regionCode=IN&key=${API_KEY}`
    );
    res = await res.json();
    res = res.items;
    let arr = [];
    res.map((item) => {
      if (item.id.kind !== "youtube#channel") {
        arr.push(item);
      }
    })
    setData(arr);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSeacrhData();
    navigate("/");
  };

  return (
    <div className="flex h-14 px-4 items-center justify-between sticky top-0 z-10 bg-[#0f0f0f] ">
      <div className="flex gap-6 items-center w-[200px] ">
        <div className="m-[5px] flex h-5 items-center ">
          <SlMenu
            onClick={() =>
              setShowSidebar((prev) => (prev === false ? true : false))
            }
            className="text-white text-xl cursor-pointer "
          />
        </div>
        <div
          onClick={() => {
            categoryID === "" ? setcategoryID(0) : setcategoryID("");
            navigate("/");
          }}
          className="flex h-5 items-center cursor-pointer "
        >
          <img src={logo} className="h-full" alt="logo" />
        </div>
      </div>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className=" sm:flex hidden items-center    ">
          <div className=" flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 ">
            <input
              className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px] "
              placeholder="Search"
              type="text"
              onChange={(e) => {
                handleChange(e);
              }}
              value={searchText}
            />
          </div>
          <button
            type="submit"
            className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
          >
            <IoIosSearch className="text-white text-xl" />
          </button>
        </div>
      </form>

      <div className=" items-center flex sm:hidden md:flex   ">
        <img className="w-[25px] mr-[25px] " src={upload} alt="upload"></img>

        <img
          className="w-[25px] mr-[25px] "
          src={notification}
          alt="noti"
        ></img>
        <FaUserAlt className=" w-[20px] h-[20px] text-white bg-[#0f0f0f] " />
      </div>
    </div>
  );
};

export default Navbar;
