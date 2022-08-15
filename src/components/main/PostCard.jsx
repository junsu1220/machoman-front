import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { customAlphabet } from "nanoid";

import { moreList, __loadPost } from "../../redux/modules/postSlice";

const PostCard = () => {
  const post_list = useSelector((state) => state.post.list);
  const listCount = useSelector((state) => state.post.countList);
  const dispatch = useDispatch();
  const nanoid = customAlphabet("0123456789abcdef", 6);
  const [listState, setListState] = useState([]);

  const [lastPost, setLastPost] = useState(false);

  const storage = sessionStorage.getItem("category");

  const handleScroll = (e, listState, listCount, lastPost) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (
      scrollTop + clientHeight >= scrollHeight - 90 &&
      !lastPost &&
      listState.length !== 0
    ) {
      if (listCount < listState.length) {
        dispatch(moreList());
      } else {
        setLastPost(true);
      }
    }
  };

  const eventFn = (e) => {
    handleScroll(e, listState, listCount, lastPost);
  };
  React.useEffect(() => {
    dispatch(__loadPost());
  }, []);
  React.useEffect(() => {
    if (!storage) {
      setListState(post_list);
    }
  }, [post_list]);
  React.useEffect(() => {
    window.addEventListener("scroll", eventFn);
    return () => {
      window.removeEventListener("scroll", eventFn);
    };
  });
  return (
    <Warp>
      {post_list.slice(0, listCount).map((dic, idx) => {
        return (
          <PostBox key={nanoid()}>
            {/* Link 로 props 보내기를 활용해 상세페이지에 들어갈 때 데이터를 전송 */}
            <Link to={`/detail/${dic.id}`} state={{ data: dic }}>
              <TextBox>
                <div>
                  <h4>{dic.title}</h4>
                </div>
                <div>
                  <Text>{dic.image}</Text>
                </div>
                <div>
                  <Like>comment : {dic.nickname}</Like>
                </div>
              </TextBox>
            </Link>
          </PostBox>
        );
      })}
    </Warp>
  );
};
const Warp = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: 50px 50px; */
  grid-gap: 20px;
  /* row-gap: 10px; */
  width: 60vw;
  /* background-color: aqua; */
  margin: 0px auto;
  padding: 20px;
`;

const PostBox = styled.div`
  display: flex;
  width: 15vw;
  height: 25vh;
  margin: 20px auto;
  padding: 20px;
  /* margin-bottom: 20px; */

  border: solid 4px darkgrey;
`;

const TextBox = styled.div`
  display: block;
  width: 11vw;
  margin: auto;

  div {
    margin: 20px;
  }

  h4 {
    text-align: left;
    color: white;
  }

  p {
    text-align: left;
  }
`;

const Text = styled.p`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const Like = styled.p`
  float: left;
  color: gray;
`;

export default PostCard;
