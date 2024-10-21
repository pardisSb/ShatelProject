import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "./postsSlice";
import Button from "../../components/Button";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderCard = () =>
    posts.posts?.map((post) => (
      <div
        className="bg-gray-200 p-5 flex items-center justify-between rounded  border-2 border-fuchsia-300"
        key={post.id}
      >
        <div className="p-5 flex-col">
          <h3 className="font-bold text-lg text-slate-600">{post.title}</h3>
          <div className="font-normal text-slate-500 mt-5">{post.body}</div>
          <div className="font-normal text-slate-500  mt-5">{`User Id : ${post.userId}`}</div>
        </div>
      </div>
    ));

  return (
    <div>
      <Link to="/add-post">
        <Button>Add User</Button>
      </Link>
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
