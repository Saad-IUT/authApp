import axios from 'axios'

export const addBlog = async newPost => {
  axios
    .post('/blog', { body: { blog: newPost } })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.error(err.response)
    })
}
