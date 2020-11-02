import axios from 'axios'
import { getData, removeData } from '../../functions/AsyncStorage'
import {
  SET_COMMENT,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_BLOGS,
  LIKE_SCREAM,
} from '../types'

export const handleComment = async blogId => {
  const comment = await getData('comment')
  axios
    .post(`/blog/${blogId}/comment`, { body: comment })
    .then(res => {
      alert('Commented successfully!!')
    })
    .catch(err => {
      console.error(err.response)
    })
  removeData('comment')
}

export const handlePost = async () => {
  const post = await getData('post')
  axios
    .post('/blog', { body: post })
    .then(res => {
      alert('Posted successfully!!')
    })
    .catch(err => {
      console.error(err.response)
    })
  removeData('post')
}

export const getPost = (uiDispatch, dataDispatch) => {
  uiDispatch({ type: LOADING_UI })
  axios
    .get('/blogs')
    .then(res => {
      dataDispatch({ type: SET_BLOGS, payload: res.data })
      uiDispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => {
      uiDispatch({ type: STOP_LOADING_UI })
      console.error(err.response)
    })
}

export const getOneBlog = (blogId, dataDispatch, uiDispatch) => {
  uiDispatch({ type: LOADING_UI })
  axios
    .get(`/blog/${blogId}`)
    .then(res => {
      dataDispatch({ type: SET_COMMENT, payload: res.data.comments })
      uiDispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => {
      uiDispatch({ type: STOP_LOADING_UI })
      console.error(err.response)
    })
}

export const getLikes = dispatch => {
  axios
    .get('/user/me')
    .then(res => {
      dispatch({ type: LIKE_SCREAM, payload: res.data.likes })
    })
    .catch(err => {
      console.error(err.response)
    })
}

export const handleLike = blogId => {
  axios
    .get(`/blog/${blogId}/like`)
    .then(res => {
      alert('Liked!!')
    })
    .catch(err => {
      alert(err.response.data.error)
    })
}

export const handleUnlike = blogId => {
  axios
    .get(`/blog/${blogId}/unlike`)
    .then(res => {
      alert('Unliked!!')
    })
    .catch(err => {
      alert(err.response.data.error)
    })
}
