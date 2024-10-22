import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData, deleteUsers } from "./postsSlice";
import Button from "../../components/Button";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleRemoveUser = (id) => {
    dispatch(deleteUsers(id));
  };

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
        <button onClick={() => handleRemoveUser(post.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
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
