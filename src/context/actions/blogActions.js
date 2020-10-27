import axios from 'axios'
import { getData, removeData } from '../../functions/AsyncStorage'
import { SET_COMMENT, LOADING_UI, STOP_LOADING_UI } from '../types'

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

export const getOneBlog = (blogId, dispatch) => {
  dispatch({ type: LOADING_UI })
  axios
    .get(`/blog/${blogId}`)
    .then(res => {
      dispatch({ type: SET_COMMENT, payload: res.data.comments })
      dispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => console.error(err.response))
}
