const BookmarkedBlogs = ({ bookmarkedBlogs }) => {
  return (
    <div className='bg-gray-200 p-4 rounded-md'>
      <h1 className='font-medium'>Bookmarked Blogs:{bookmarkedBlogs.length}</h1>
      <ul>
        {bookmarkedBlogs.map((bBlog) => (
          <li key={bBlog.id}>{bBlog.title}</li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};

export default BookmarkedBlogs;
