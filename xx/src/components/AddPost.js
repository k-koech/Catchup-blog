import React, { useState } from 'react'

function AddPost() 
{
    const [title, setTitle] = useState("Kelvin");
    const [content, setContent] = useState();
    const [user, setUser] = useState();
     
    const handleSubmit = e => 
    {    
  
      e.preventDefault();
      const data = {title: "title", content: "content", user: user  }
      console.log(data)

    //   fetch("http://localhost:9292/posts", {
    //     method: "POST",
    //     // headers: {
    //         headers: {"Content-Type": "application/json" },
    //     // },
    //     body: JSON.stringify(data),
    //     })
    //     .then((r) => r.json())
    //     .then((response)=>{
    //         console.log(response)
    //     })

        fetch("http://localhost:9292/posts", {
        method: "POST",
        headers: {
            // "Content-Type": "application/json",
        Accept: "application/json",
        "Content-Type": "application/json",
    },
        body: JSON.stringify(data),
        })
      .then((r) => r.json())
      .then((response) => 
      {
        console.log(response) 
        
      });
  

    //   setTitle("");  setUser(""); setContent("");
    };
     

  return (
    <div className="containder-fluid mx-auto min-h-[70vh]">
    <h2 className='text-2xl font-bold'>Add Post</h2>
   
    <div className="h-fit px-1 font-sans">
            <form onSubmit={handleSubmit}  className='w-full shadow rounded-lg p-4'>                 
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" value={title || ""}  onChange={(e) => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User</label>
                    <input type="text" value={user || ""}  onChange={(e) => setUser(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                </div>
           
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                    <textarea value={content || ""}  onChange={(e) => setContent(e.target.value)} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Blog description..." required></textarea>
                </div>

                                 
                <button type="submit" className="btn btn-outline-success">
                    Submit
                </button>
            </form>

    </div> 
    
    </div>
  )
}

export default AddPost