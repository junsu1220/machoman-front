import React from "react";
import PostCard from "../components/main/PostCard";
import Layout from "../components/Layout";

const Main = (location) => {
  if (window.location.href.slice(29)) {
    localStorage.setItem("token", window.location.href.slice(29));
  }
  return (
    <Layout>
      <PostCard />
    </Layout>
  );
};

export default Main;
