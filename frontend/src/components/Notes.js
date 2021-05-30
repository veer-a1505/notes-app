import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNotes, editNotes, getNotes } from '../actions/notesActions'

const Notes = (props) => {
  const userLogin = useSelector((state) => state.login)
  const {
    userInfos: { user },
  } = userLogin

  const [editItem, setEditItem] = useState(false)

  const dispatch = useDispatch()

  const userNotes = useSelector((state) => state.notes)
  const editedNotes = useSelector((state) => state.editNote)

  const { notes } = userNotes

  console.log(editedNotes)

  const deleteNote = (id) => {
    dispatch(deleteNotes(id))

    setTimeout(() => {
      dispatch(getNotes(user._id))
    }, 50)
  }

  useEffect(() => {
    dispatch(getNotes(user._id))
  }, [user])

  const hanldeSave = (e, id) => {
    console.log(id)
    if (e.target.textContent) {
      const note = e.target.textContent
      dispatch(editNotes(id, note))
    }
  }

  return (
    <div className='notes'>
      {notes ? (
        notes.map((note) => {
          const { _id, title, text, lable } = note
          return (
            <div key={_id}>
              <article>
                <div className='icons'>
                  <i
                    className='far fa-trash-alt'
                    onClick={() => deleteNote(_id)}></i>
                </div>

                <h2>{title}</h2>

                <p
                  contentEditable='true'
                  suppressContentEditableWarning={true}
                  onBlur={(e) => hanldeSave(e, _id)}>
                  {text}
                </p>

                <span>{lable}</span>
              </article>
            </div>
          )
        })
      ) : (
        <div>Some notes here</div>
      )}
    </div>
  )
}

export default withRouter(Notes)
