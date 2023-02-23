import { Link } from "react-router-dom";
import  AddBlog from "./AddBlog";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Football Hub</h1>
      <Link to="/">Home</Link>
      <Link to="/AddBlog" element={<AddBlog/>}>
        Add Blog
      </Link>
    </nav>
  );
};

export default Navbar;
