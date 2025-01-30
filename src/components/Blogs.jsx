import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import BookmarkedBlogs from "./BookmarkedBlogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleAddToBookmark = (blog) => {
    // console.log("Bookmark added");
    // console.log(blog);
    setBookmarkedBlogs([...bookmarkedBlogs, blog]);
    console.log(bookmarkedBlogs);
  };
  return (
    <div className='flex justify-between gap-6 items-start mt-4'>
      <div className='w-1/2 mx-auto'>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
          />
        ))}
      </div>
      {/* right side  */}
      <div>
        <div>
          <h1 className='bg-violet-200 border border-violet-600 text-violet-700 px-6 py-2 font-bold text-sm rounded-md my-6'>
            Spent Time on read :
          </h1>
        </div>
        <BookmarkedBlogs bookmarkedBlogs={bookmarkedBlogs} />
      </div>
    </div>
  );
};

export default Blogs;
