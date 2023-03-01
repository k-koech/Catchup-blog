import React, { useEffect, useState } from 'react'
import AddPost from './AddPost';
import Post from "./Post";

function Home() 
{
 
  const [posts, setPosts] = useState()
  const [loading, setLoading] =useState(true)

  useEffect(()=>{
    fetch("http://localhost:9292/posts", {
      method: "GET",
      headers: {
        Accept:"application/json"
      }
    })
    .then((r)=>r.json())
    .then((posts)=>{
      console.log("Data ", posts)
      setPosts(posts)
      setLoading()
      
    })}
  ,[])
    
    
    return (
      // f'>
      <div className='container-fluid row pt-4 pb-2'>
              <h1>Blog Posts   <span class="badge bg-primary rounded-pill">{posts && posts.length}</span></h1>

      <div className="col-sm-8 min-vh-100">
        {
        loading?
        <div className="h-50 d-inline-block d-flex flex-column justify-content-center align-items-center">
          <div class="spinner-border" role="status">
            {/* <span class="sr-only">Loading...</span> */}
          </div>
          <h5>Loading data ...</h5>
        </div>
        :
        <>
          {
          posts && posts.map((post) => ( 
              <Post post={post} key={post.id} />
            ))
          }
          </>
        }
      </div>
     
      <div className="col-sm-4 border-left">
        <AddPost/>
      </div>
    </div>
  )
}

export default Home


