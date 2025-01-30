const BookmarkedBlogs = ({ bookmarkedBlogs }) => {
  return (
    <div className='bg-gray-200 p-4 rounded-md'>
      <h1 className='font-medium mb-6'>
        Bookmarked Blogs:{bookmarkedBlogs.length}
      </h1>

      {bookmarkedBlogs.map((bBlog) => (
        <p className='bg-white p-4 rounded-md font-medium mb-4' key={bBlog.id}>
          {bBlog.title}
        </p>
      ))}

      <div></div>
    </div>
  );
};

export default BookmarkedBlogs;
