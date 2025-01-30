const Blog = ({ blog }) => {
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
            <div>
              <h1>{author}</h1>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className='flex justify-between gap-2'>
            <p>{reading_time} reading time</p>
            <p>icon</p>
          </div>
        </div>
      </div>
      {/* bottom div */}
      <h1>{title}</h1>
      {/* hastags  */}
      <p>
        {hashtags.map((hashtag, idx) => (
          <span className='mx-1' key={idx}>
            #{hashtag}
          </span>
        ))}
      </p>
      <button className='text-blue-600 underline text-xs cursor-pointer '>
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
