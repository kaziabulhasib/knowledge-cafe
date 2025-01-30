import { useEffect, useState } from "react";
import Blog from "./Blog";
import BookmarkedBlogs from "./BookmarkedBlogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const [readingtime, setReadingTime] = useState(0);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleAddToBookmark = (blog) => {
    setBookmarkedBlogs([...bookmarkedBlogs, blog]);
    console.log(bookmarkedBlogs);
  };

  const handleMarkRead = (time) => {
    setReadingTime((prevtime) => {
      const newTime = prevtime + time;
      console.log("Total reading time:", newTime);
      return newTime;
    });
  };

  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col lg:flex-row justify-between gap-6 items-start mt-4'>
        {/* Main content area - full width on mobile, half on desktop */}
        <div className='w-full lg:w-1/2 order-2 lg:order-1'>
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handleAddToBookmark={handleAddToBookmark}
              handleMarkRead={handleMarkRead}
            />
          ))}
        </div>

        {/* Sidebar - full width on mobile, one-third on desktop */}
        <div className='w-full lg:w-1/3 order-1 lg:order-2'>
          <div className='sticky top-4'>
            <h1 className='bg-violet-200 border border-violet-300 text-violet-700 px-4 lg:px-6 py-3 font-bold text-sm rounded-md my-4 lg:my-6 text-center lg:text-left'>
              Spent Time on read: {readingtime}
            </h1>
            <BookmarkedBlogs bookmarkedBlogs={bookmarkedBlogs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
