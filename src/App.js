import Navbar from './Navbar';
import Home from './Home';
import AddBlog from './AddBlog'
import NotFound from './NotFound'
import {Routes, Route} from 'react-router-dom';
import BlogDetails from './BlogDetails';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddBlog' element={<AddBlog/>}/>
        <Route path='/blogs/:id' element={<BlogDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    
      </div>
    </div>
  );
}

export default App;
