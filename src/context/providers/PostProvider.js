import React, { useState } from 'react'

const PostContext = React.createContext()

const PostProvider = props => {
  const [post, setPost] = useState([])

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {props.children}
    </PostContext.Provider>
  )
}

export { PostContext, PostProvider }
