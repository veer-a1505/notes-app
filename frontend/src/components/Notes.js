import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNotes, getNotes } from '../actions/notesActions'

const Notes = (props) => {
  const userLogin = useSelector((state) => state.login)
  const {
    userInfos: { user },
  } = userLogin

  const [editItem, setEditItem] = useState(false)

  const dispatch = useDispatch()

  const userNotes = useSelector((state) => state.notes)

  const { notes } = userNotes

  const deleteNote = (id) => {
    dispatch(deleteNotes(id))

    setTimeout(() => {
      dispatch(getNotes(user._id))
    }, 100)
  }

  const editNote = () => {
    setEditItem(true)
  }

  useEffect(() => {
    dispatch(getNotes(user._id))
  }, [user])

  return (
    <div className='notes'>
      {notes
        ? notes.map((note) => {
            const { _id, title, text, lable } = note
            return (
              <div key={_id}>
                <article>
                  <div className='icons'>
                    <i
                      className='far fa-edit'
                      onClick={() => editNote(_id)}></i>

                    <i
                      className='far fa-trash-alt'
                      onClick={() => deleteNote(_id)}></i>
                  </div>

                  <h2>{title}</h2>
                  <p>{text}</p>
                  <span>{lable}</span>
                </article>
              </div>
            )
          })
        : null}
    </div>
  )
}

export default withRouter(Notes)
