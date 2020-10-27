import axios from 'axios'

/* const config = {
  headers: {
    'Authorization': `Bearer ${localStorage.token}`
  }
} */

// get all emojis
export const getEmojis = async() => {
  const res = await axios.get('/api/emojis/')
  
  
  return res.data
}
// get single emoji
export const getEmoji = async(id) => {
  const res = await axios.get(`/api/emojis/${id}`)
  
  
  return res.data
}

// remove single emoji
/* export const removeEmoji = async(id, history) => {
  const res = await axios.delete(`/api/emojis/${id}`, config)
  
  history.push('/')
  
  return res.data
} */