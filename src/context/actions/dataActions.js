import axios from 'axios'
import {
  getData,
  getDataJSON,
  storeDataJSON,
} from '../../functions/AsyncStorage'
import {
  SET_COMMENT,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_BLOGS,
  LIKE_SCREAM,
  DISABLE_INPUT,
  ENABLE_INPUT,
} from '../types'

export const detailsUpdate = (date, work, address, dispatch) => {
  dispatch({ type: DISABLE_INPUT })
  axios
    .post('/user', { dob: date, work: work, location: address })
    .then(res => {
      alert('Details added successfully!!')
      dispatch({ type: ENABLE_INPUT })
    })
    .catch(err => {
      console.error(err.response)
      dispatch({ type: ENABLE_INPUT })
    })
}

export const getPost = async (uiDispatch, dataDispatch) => {
  uiDispatch({ type: LOADING_UI })
  let posts = await getDataJSON('posts')
  if (posts) {
    dataDispatch({ type: SET_BLOGS, payload: posts })
    uiDispatch({ type: STOP_LOADING_UI })
  } else {
    uiDispatch({ type: STOP_LOADING_UI })
  }
}

export const getOneBlog = async (blogId, dataDispatch, uiDispatch) => {
  let commentData = []
  uiDispatch({ type: LOADING_UI })
  let comments = await getDataJSON('comments')
  if (comments) {
    comments.forEach(comment => {
      if (comment.blogId == blogId) {
        commentData.push(comment)
        dataDispatch({ type: SET_COMMENT, payload: commentData })
        uiDispatch({ type: STOP_LOADING_UI })
      } else {
        dataDispatch({ type: SET_COMMENT, payload: [] })
      }
    })
  }
  uiDispatch({ type: STOP_LOADING_UI })
}

export const getLikes = async dispatch => {
  let likes = await getDataJSON('likes')
  dispatch({ type: LIKE_SCREAM, payload: likes })
}

export const handleLike = async blogId => {
  let token = await getDataJSON('token')
  let likes = await getDataJSON('likes')
  let posts = await getDataJSON('posts')
  posts.forEach(post => {
    if (post.blogId == blogId) post.likeCount++
    storeDataJSON('posts', posts)
  })
  if (likes) {
    storeDataJSON('likes', [
      ...likes,
      {
        likeId: Math.random().toString(36).substring(7),
        userHandle: token.handle,
        blogId,
      },
    ])
    alert('Liked')
  } else {
    storeDataJSON('likes', [
      {
        likeId: Math.random().toString(36).substring(7),
        userHandle: token.handle,
        blogId,
      },
    ])
    alert('Liked')
  }
}

export const handleUnlike = async blogId => {
  //likecount decrease
  let posts = await getDataJSON('posts')
  posts.forEach(post => {
    if (post.blogId == blogId && post.likeCount > 0) post.likeCount--
    storeDataJSON('posts', posts)
  })
  //remove like
  let likes = await getDataJSON('likes')
  let token = await getDataJSON('token')
  let newLikes = []
  likes.forEach(like => {
    if (!(like.blogId == blogId && like.userHandle == token.handle))
      newLikes.push(like)
  })
  storeDataJSON('likes', newLikes)
  alert('Unliked')
}
