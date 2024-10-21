import { Route, Routes } from "react-router-dom";
import PostsList from "./features/posts/PostsList";
import AddPost from "./features/posts/AddPost";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        Shatel Project
      </h1>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
