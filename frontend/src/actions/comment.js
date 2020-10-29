import axios from 'axios'


export const getComments = async(emojiId) => {
  try {
    const res = await axios.get(`/api/comments/${emojiId}`)
    return res.data

  } catch (err) {
    return err.message
  }
}

export const removeComment = async(emojiId, commentId) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${ localStorage.token }`,
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.delete(`/api/comments/${emojiId}/${commentId}`, config)
    return res.data

  } catch (err) {
    return err.message
  }
}

export const postComment = async(emojiId, formData) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${ localStorage.token }`,
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post(`/api/comments/${emojiId}/`, formData, config)
    return res.data

  } catch (err) {
    return err.message
  }
}
