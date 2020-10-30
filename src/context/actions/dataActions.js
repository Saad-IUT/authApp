import axios from 'axios'
import { getData, removeData } from '../../functions/AsyncStorage'
import { SET_COMMENT, LOADING_UI, STOP_LOADING_UI, SET_BLOGS } from '../types'

export const handleComment = async blogId => {
  const comment = await getData('comment')
  axios
    .post(`/blog/${blogId}/comment`, { body: comment })
    .then(res => {
      console.log(res.data)
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
      console.log(res.data)
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
