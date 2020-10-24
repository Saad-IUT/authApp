import axios from 'axios'
import { getData } from '../../functions/AsyncStorage'

export const addBlog = async newPost => {
  const token = await getData('token')
  axios
    .post(
      '/blog',
      {
        blog: newPost,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.error(err.response)
    })
}
