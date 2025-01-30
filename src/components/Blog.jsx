import { useState } from "react";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkRead }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div>
      <div className='my-6'>
        <img src={cover} alt='blog_cover_img' />
      </div>
      {/* top div */}
      <div>
        <div className='flex justify-between'>
          <div className='flex justify-between'>
            <img className='h-12 w-12' src={author_img} alt='' />
            <div className='text-start ml-4'>
              <h1 className='font-semibold mb-1'>{author}</h1>
              <p className='text-xs'>{posted_date}</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <p className='text-gray-500'>{reading_time} reading time</p>
            <p onClick={() => handleAddToBookmark(blog)}>
              <CiBookmark className='text-xl cursor-pointer' />
            </p>
          </div>
        </div>
      </div>
      {/* bottom div */}
      <div className='text-start mx-6 my-8 space-y-6'>
        <h1 className='text-2xl font-bold w-3/4'>{title}</h1>
        {/* hastags  */}
        <p>
          {hashtags.map((hashtag, idx) => (
            <span className='mr-2 text-gray-600 text-sm font-medium' key={idx}>
              #{hashtag}
            </span>
          ))}
        </p>
        <button
          onClick={() => handleMarkRead(reading_time)}
          className='text-blue-600 underline text-xs cursor-pointer '>
          Mark as read
        </button>
        {/* <h1>Total time : {readingtime}</h1> */}
      </div>
    </div>
  );
};

export default Blog;
