import axios from 'axios'

const config = {
  headers: {
    'Authorization': `Bearer ${ localStorage.token }`,
    'Content-Type': 'application/json'
  }
}

export const getLikes = async(emojiId) => {
  try {
    const res = await axios.get(`/api/likes/${emojiId}`)
    return res.data

  } catch (err) {
    return err.message
  }
}

export const removeLike = async(emojiId, likeId) => {
  try {
    const res = await axios.delete(`/api/likes/${emojiId}/${likeId}`, config)
    return res.data

  } catch (err) {
    return err.message
  }
}

export const postLike = async(emojiId) => {
  try {
    const res = await axios.post(`/api/likes/${emojiId}/`, config)
    return res.data

  } catch (err) {
    return err.message
  }
}