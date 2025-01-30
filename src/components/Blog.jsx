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
      <div>
        <div className='flex'>
          <div className='flex'>
            <img className='h-12 w-12' src={author_img} alt='' />
            <div>
              <h1>{author}</h1>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className='flex'></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
