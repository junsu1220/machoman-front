import React from "react";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import Post from "../pages/Post";
// import MyPage from "../pages/MyPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/post" element={<Post />} />
        {/* <Route path="/mypage" element={<MyPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
