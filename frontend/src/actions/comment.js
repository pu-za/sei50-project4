import axios from 'axios'

const config = {
  headers: {
    'Authorization': `Bearer ${ localStorage.token }`,
    'Content-Type': 'application/json'
  }
}

export const getComments = async(emojiId) => {
  try {
    const res = await axios.get(`/api/comments/${emojiId}`)
    return res.data

  } catch (err) {
    return err.message
  }
}

export const removeComment = async(emojiId, commentId) => {
  try {
    const res = await axios.delete(`/api/comments/${emojiId}/${commentId}`, config)
    return res.data

  } catch (err) {
    return err.message
  }
}

export const postComment = async(emojiId, formData) => {
  try {
    const res = await axios.post(`/api/comments/${emojiId}/`, formData, config)
    return res.data

  } catch (err) {
    return err.message
  }
}
