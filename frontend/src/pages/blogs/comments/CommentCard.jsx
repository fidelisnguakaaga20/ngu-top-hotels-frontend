// import React from 'react'
// import commentorIcon from "../../../assets/commentor.png"
// import { formatDate } from '../../../utilis/formateDate'
// import PostAComment from './PostAComment'
// import { useSelector } from 'react-redux'

// const CommentCard = ({comments}) => {
//     console.log(comments)
//     const user = useSelector((state) => state.auth.user);

//   return (
//     <div className='my-6 bg-white p-8'>
//         <div>
//             {
//                 comments?.length > 0 ? <div>
//                     <h3 className='text-lg font-medium'>All comments</h3>
//                     <div>
//                         {
//                             comments.map((comment, index) => (
//                                 <div key={index} className='mt-4'>
//                                     <div className='flex gap-4 items-center'>
//                                         <img src={commentorIcon} alt="" className='h-14'/>
//                                         <div>
//                                             <p className='text-lg font-medium underline capitalize underline-offset-4 text-blue-400'>{comment?.user.username}</p>
//                                             <p className='text-[12px] italic'>{formatDate(comment.createdAt)}</p>
//                                         </div>
//                                     </div>
//                                     {/* comment details */}
//                                     <div className='md:text-gray-600 mt-5 border p-8'>
//                                         <p className='md:w-4/5'>{comment?.comment}</p>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                 </div> : <div className=''>No comments found</div>
//             }
//         </div>
        
//         {/* comment input here */}
//         <PostAComment/>
//     </div>
    
//   )
// }

// export default CommentCard



import React from "react";
import commentorIcon from "../../../assets/commentor.png";
import { formatDate } from "../../../utilis/formateDate";
import PostAComment from "./PostAComment";
import { useSelector } from "react-redux";

const CommentCard = ({ comments }) => {
  // not used here but fine to keep if you show different UI for logged-in users
  const user = useSelector((state) => state.auth.user);

  // always work with a safe array
  const list = Array.isArray(comments) ? comments : [];

  return (
    <div className="my-6 bg-white p-8">
      <div>
        {list.length > 0 ? (
          <div>
            <h3 className="text-lg font-medium">All comments</h3>
            <div>
              {list.map((c, index) => {
                const name = c?.user?.username ?? c?.username ?? "Anonymous";
                const created =
                  c?.createdAt ? formatDate(c.createdAt) : "";
                const text = c?.comment ?? c?.text ?? "";
                const key = c?._id ?? index;

                return (
                  <div key={key} className="mt-4">
                    <div className="flex gap-4 items-center">
                      <img src={commentorIcon} alt="" className="h-14" />
                      <div>
                        <p className="text-lg font-medium underline capitalize underline-offset-4 text-blue-400">
                          {name}
                        </p>
                        {created && (
                          <p className="text-[12px] italic">{created}</p>
                        )}
                      </div>
                    </div>

                    {/* comment details */}
                    <div className="md:text-gray-600 mt-5 border p-8">
                      <p className="md:w-4/5">{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="">No comments found</div>
        )}
      </div>

      {/* comment input here */}
      <PostAComment />
    </div>
  );
};

export default CommentCard;
