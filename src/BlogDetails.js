import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./fetch";

const BlogDetails = () => {
  const navigate = useNavigate();
    const {id}=useParams()
    const {
      data: blog,
      isPending,
      error,
    } = useFetch("http://localhost:8000/blogs/"+id);

const handleClick =()=>{
  fetch("http://localhost:8000/blogs/"+blog.id,{
    method:"DELETE"
  }).then(()=>{
console.log("deleted");

navigate("/");
  }
    
  )

}

    return (
      <div className="blog-details">
        {isPending && <div> Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article className="article">
            <h2>{blog.title}</h2>

            <div>
              
              <p>{blog.body} </p>
            </div>
            <div style={{textAlign:'right'}}>
            <h3>written by {blog.author}</h3>
            </div>
          </article>
        )}
      <button
      onClick={handleClick}>delete</button>
      </div>
    );
}
 
export default BlogDetails;