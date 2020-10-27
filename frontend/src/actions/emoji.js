import axios from 'axios'

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