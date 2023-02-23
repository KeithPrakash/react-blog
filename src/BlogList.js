import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2 className="bigTitle">{title}</h2>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`}>
          <div
            className="blog-preview"
            key={blog.id}
            style={{ textDecoration: "none" }}
          >
            <div className="blog-img"></div>
            <div className="blog-left">
              <p>{blog.title}</p>
             
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default BlogList;
