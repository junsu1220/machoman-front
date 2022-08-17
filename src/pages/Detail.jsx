import React from "react";
import DetailInfo from "../components/detail/DetailInfo";
import Layout from "../components/Layout";

import CommentsBox from "../components/comments/CommentsBox";


const Detail = () => {
  return (
    <Layout>
      <DetailInfo />
      <CommentsBox />
    </Layout>
  );
};


export default Detail;
