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
    setBookmarkedBlogs([...bookmarkedBlogs, blog]);
    console.log(bookmarkedBlogs);
  };
  const [readingtime, setReadingTime] = useState(0);
  const handleMarkRead = (time) => {
    setReadingTime((prevtime) => {
      const newTime = prevtime + time;
      console.log("Total reading time:", newTime);
      return newTime;
    });
  };
  return (
    <div className='flex justify-between gap-6 items-start mt-4'>
      <div className='w-1/2'>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
            handleMarkRead={handleMarkRead}
          />
        ))}
      </div>
      {/* right side  */}
      <div className='w-1/3'>
        <div>
          <h1 className='bg-violet-200 border border-violet-300 text-violet-700 px-6 py-3 font-bold text-sm rounded-md my-6'>
            Spent Time on read : {readingtime}
          </h1>
        </div>
        <BookmarkedBlogs bookmarkedBlogs={bookmarkedBlogs} />
      </div>
    </div>
  );
};

export default Blogs;
