import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
           <div className='my-14'>

<div className=' max-w-[700px]  mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]  p-8'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='font-bold text-[20px]'>{post.title}</span>
      </NavLink>
      <p>
        By
        <span className='italic'>{post.author +" "}</span>
         on  {"  "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='font-bold underline'>{post.category}</span>
        </NavLink>
      </p>
      <p> Posted on {post.date} </p>
      <p className='mt-2'> {post.content}</p>
      <div className=''>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='underline text-blue-800 tracking-tighter ml-2'>{`#${tag}` + "  "}</span>
            </NavLink>
        ) )}
      </div>
    </div>

           </div>
    
  )
}

export default BlogDetails
