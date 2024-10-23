import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editPosts } from "./postsSlice";

const EditPost = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const dispatch = useDispatch();
  // const posts = useSelector((store) => store.posts);
  const navigate = useNavigate();
  // const existingPost = posts.filter((post) => post.id === params.id);
  // const { title, body, userId } = existingPost[0];
  // const [values, setValues] = useState({
  //   title,
  //   body,
  //   userId,
  // });

  const [values, setValues] = useState({
    title: "",
    body: "",
    userId: 0,
    id,
  });

  const handleEditPost = () => {
    setValues({ title: "", body: "", userId: "" });
    dispatch(
      editPosts({
        id: values.id,
        userId: values.userId,
        title: values.title,
        body: values.body,
      })
    );
    navigate("/");
  };

  // const handleEditPost = (e) => {
  //   setValues({ title: "", body: "", userId: 0, id });
  //   dispatch(editPosts(values));
  //   navigate("/");
  // };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Title"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        inputProps={{ type: "text", placeholder: "Title" }}
      />
      <br />
      <TextField
        label="Body"
        value={values.body}
        onChange={(e) => setValues({ ...values, body: e.target.value })}
        inputProps={{ type: "text", placeholder: "body" }}
      />
      <br />
      <TextField
        label="UserId"
        value={values.userId}
        onChange={(e) => setValues({ ...values, userId: e.target.value })}
        inputProps={{ type: "text", placeholder: "UserId" }}
      />
      <Button onClick={handleEditPost}>Edit</Button>
    </div>
  );
};

export default EditPost;
