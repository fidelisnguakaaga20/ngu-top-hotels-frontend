// import React from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { useFetchRelatedBlogsQuery } from '../../../redux/features/blogs/blogsApi';

// const RelatedBlogs = () => {
//     const {id} =useParams();
//     // const {data: blogs = [], error, isLoading} = useFetchRelatedBlogsQuery(id);
//     const { data: blogs = [], isLoading, isError } = useFetchRelatedBlogsQuery(id);

//     console.log(blogs)
//   return (
//     <div>
//         <h3 className='text-2xl font-medium pt-8 px-8 pb-5'>Related Blogs</h3>
//         <hr />
//         {
//             blogs.length > 0 ?  
//             (<div className='space-y-4 mt-5'>
//             {
//                 blogs.map((blog) => (
//                     <Link className='flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm px-8 py-4'>
//                         {/* <div className='size-14'> */}
//                              <div className='h-14 w-14 shrink-0'> 
//                             <img src={blog.coverImg} alt="" className='h-full w-full rounded-full ring-2 ring-blue-700'/>
//                         </div>
//                         <div>
//                             <h4 className='font-medium text-[#1E73BE]'>{blog?.title.substring(0, 50)} </h4>
//                             <p>{blog?.description.substring(0, 50)}</p>
//                         </div>
//                     </Link>
//                 ))
//             }    
//             </div>) : (<div className='p-8'>No related blogs found!</div>) 
//         }
//     </div>
//   )
// }

// export default RelatedBlogs



import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchRelatedBlogsQuery } from '../../../redux/features/blogs/blogsApi';

const RelatedBlogs = () => {
  const { id } = useParams();
  const { data: blogs = [], isLoading, isError } = useFetchRelatedBlogsQuery(id);

  return (
    <div>
      <h3 className="text-2xl font-medium pt-8 px-8 pb-5">Related Blogs</h3>
      <hr />

      {isLoading && <div className="p-8">Loading…</div>}
      {isError && <div className="p-8 text-red-500">Failed to load related blogs.</div>}

      {!isLoading && !isError && (
        blogs.length > 0 ? (
          <div className="space-y-4 mt-5">
            {blogs.map((blog, idx) => (
              <Link
                to={`/blogs/${blog._id}`}                                  // add destination
                key={blog._id || blog.id || idx}                            // add stable key
                className="flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm px-8 py-4"
              >
                <div className="h-14 w-14 shrink-0">
                  <img
                    src={blog.coverImg}
                    alt={blog.title || 'Related blog'}
                    className="h-full w-full rounded-full ring-2 ring-blue-700 object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-[#1E73BE]">
                    {blog?.title?.substring(0, 50)}
                  </h4>
                  <p>{blog?.description?.substring(0, 50)}...</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-8">No related blogs found!</div>
        )
      )}
    </div>
  );
};

export default RelatedBlogs;
