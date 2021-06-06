import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNotes, editNotes, getNotes } from '../actions/notesActions'

const Notes = (props) => {
  const userLogin = useSelector((state) => state.login)
  const {
    userInfos: { user },
  } = userLogin

  const dispatch = useDispatch()

  const userNotes = useSelector((state) => state.notes)
  const editedNotes = useSelector((state) => state.editNote)
  const createdNote = useSelector((state) => state.createNote)

  const { loading, note, error } = createdNote

  const { notes } = userNotes

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
    if (e.target.textContent) {
      const note = e.target.textContent
      dispatch(editNotes(id, note))
    }

    setTimeout(() => {
      dispatch(getNotes(user._id))
    }, 0)
  }

  if (error) {
    return <div className='load_notes'>Loading Notes...</div>
  }

  // <div className='notes_error'>
  //   No notes here to see...! please add some notes.
  // </div>

  return (
    <div className='notes'>
      {loading && <div className='load_notes'>Loading Notes...</div>}
      {notes
        ? notes.map((note) => {
            const { _id, title, text, lable } = note

            return (
              <div key={_id} className='item'>
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
        : null}
    </div>
  )
}

export default withRouter(Notes)
