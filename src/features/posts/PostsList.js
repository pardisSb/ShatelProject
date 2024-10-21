import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderCard = () =>
    posts.posts?.map((post) => (
      <div
        className="bg-gray-300 p-5 flex items-center justify-between"
        key={post.id}
      >
        <div className="p-5 flex-col">
          <h3 className="font-bold text-lg text-gray-700">{post.title}</h3>
          <div className="font-normal text-gray-600 mt-5">{post.body}</div>
          <div className="font-normal text-gray-600  mt-5">{`User Id : ${post.userId}`}</div>
        </div>
      </div>
    ));

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        {posts ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        )}
      </div>
    </div>
  );
};

export default PostsList;
