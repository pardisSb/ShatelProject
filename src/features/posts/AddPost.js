import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addPosts } from "./postsSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    body: "",
    userId: 0,
  });

  const handleAddPost = (e) => {
    setValues({ title: "", body: "", userId: 0 });
    dispatch(addPosts(values));
    navigate("/");
  };

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
        inputProps={{ type: "text", placeholder: "Body" }}
      />
      <br />
      <TextField
        label="UserId"
        value={values.userId}
        onChange={(e) => setValues({ ...values, userId: e.target.value })}
        inputProps={{ type: "text", placeholder: "User Id" }}
      />
      <Button onClick={handleAddPost}>Submit</Button>
    </div>
  );
};

export default AddPost;
