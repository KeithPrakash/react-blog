import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Fabrizio Romano");
  const [isPending, setIsPending] = useState();

  const navigate = useNavigate;

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("blog added");
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Fabrizio Romano">Fabrizio</option>
          <option value="Capello">Capello</option>
        </select>
        {isPending ? (
          <button disable>Loading..</button>
        ) : (
          <button>Add Blog</button>
        )}
      </form>
    </div>
  );
};

export default AddBlog;
