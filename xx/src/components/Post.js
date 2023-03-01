import React from 'react'
import { Link } from 'react-router-dom'

function Post({post}) 
{

  return (
    <div>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          <div className='d-flex justify-content-between'>
            <div>
               <p>Posted on <span className='font-weight-light'>{post.created_at}</span></p>
               <p>By {post.user.username}</p>
            </div>
            <div>
               <button className='btn btn-outline-success btn-sm'>Edit</button>
               <button className='btn btn-outline-danger btn-sm mx-3'>Delete</button>
             </div>
          </div>
        </div>
        <hr/>
        <div className='bg-white p-4'>
          <h6>Comments     <span className="badge bg-dark rounded-pill">{post.comments.length}</span></h6>
          {
            post.comments && post.comments.map((singleComment)=>(
               <div key={singleComment.id} className='bg-light border mb-2 p-3'>
                 <p className='font-weight-bold'>{singleComment.user.username}</p>
                 <p>{singleComment.comment}</p>
               </div>
            ))

          }
        </div>
      </div>
    </div>
  )
}

export default Post