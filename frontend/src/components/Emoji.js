import React, { Component, Fragment } from 'react'
import { getComments, postComment, removeComment } from '../actions/comment'
import { getEmoji } from '../actions/emoji'
import moment from 'moment'
import { getUsers } from '../actions/auth'

class Emoji extends Component {
  state = {
    emoji: null,
    comments: [],
    users: [],
    formData: {
      text: ''
    }
  }

  async componentDidMount() {
    const res = await getEmoji(this.props.match.params.id)
    const commentAPI = await getComments(this.props.match.params.id)
    this.setState({ emoji: res })
    this.setState({ comments: commentAPI })
    const usersAPI = await getUsers()
    this.setState({ users: usersAPI })
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const res = await getEmoji(this.props.match.params.id)
      const commentAPI = await getComments(this.props.match.params.id)
      this.setState({ emoji: res })
      return this.setState({ comments: commentAPI })
    }
    if (prevState.comments !== this.state.comments) {
      const commentAPI = await getComments(this.props.match.params.id)
      //this.setState({ comments: commentAPI })

      const usersAPI = await getUsers()
      await this.setState({ users: usersAPI })
      
      const commentswithuser = []
      await commentAPI.filter(function(oldData) { 
        usersAPI.filter(function(newData) {
          if (oldData.user === newData.id) {
            commentswithuser.push({
              id: oldData.id,
              user: newData.username,
              text: oldData.text,
              date: oldData.date
            })
          }
        }) 
      })
      this.setState({ comments: commentswithuser })

    }
  }


  handleChange = (e) => {
    this.setState({ formData: { ...this.state.formData, [e.target.name]: e.target.value } })

  }
  handleSubmit = async(e) => {
    e.preventDefault()
    await postComment(this.props.match.params.id, this.state.formData)
    this.setState( { formData: { text: '' } } )
  }

  render() {
    const { emoji, comments } = this.state
    const { text } = this.state.formData
    
    /* const commentswithuser = []
    comments.filter(function(oldData) { 
      users.filter(function(newData) { 
        if (oldData.user === newData.id) {
          commentswithuser.push({
            id: oldData.id,
            user: newData.username,
            text: oldData.text,
            date: oldData.date
          })
        }
      }) 
    })  */

    return (
      <Fragment>
        {
          emoji && <Fragment>
            <div className="container">
              <div className="single-container" >
                <h1 style={{ textAlign: 'center' }}>{emoji.name}</h1>
                <div className="left-content">
                
                  <p>category: {emoji.category}</p>
                  <p><img src={emoji.image} /></p>
                  
                  <form autoComplete="off" onSubmit={ e=> this.handleSubmit(e) } >
                    add comment
                    <input type="text" autoComplete="off" className="comment-input" name="text" value={text} onChange={ e=> this.handleChange(e) } />
                    <p><button className="auth-button">Send</button></p>

                  </form>
                </div>
                <div className="messages-content">
                  <p>Comment section</p>
                  <div>
                    {
                      comments && comments.map(comment=><div className="comment" key={ comment.id } ><span>{ comment.user } - { moment(comment.date).format('YYYY-MM-DD hh:mm:ss') }</span> { comment.text } <button className="del-com-button" onClick={ ()=> removeComment(emoji.id, comment.id)}>x</button></div>)
                    }
                  </div>

                </div>
              </div>
              
            </div>
          </Fragment>
        }
        
      </Fragment>
    )
  }
}
export default Emoji