import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNote, getNotes } from './../actions/notesActions'
const NotesForm = () => {
  const [usernote, setUserNote] = useState({
    title: '',
    text: '',
    lable: '',
  })

  const createdNote = useSelector((state) => state.createNote)

  const { loading, note, error } = createdNote

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setUserNote({
      ...usernote,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(createNote(usernote))
    setUserNote({
      ...usernote,
      text: '',
      title: '',
      lable: '',
    })
  }

  if (error) {
    setTimeout(() => window.location.reload(), 2000)
  }
  useEffect(() => {
    if (note) {
      dispatch(getNotes(note.postedBy))
    }
  }, [note])

  return (
    <div>
      {error ? <span className='error'>{error}</span> : null}
      <form className='notes-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={usernote.title}
          onChange={handleChange}
        />
        <textarea
          name='text'
          cols='5'
          rows='5'
          placeholder='Text'
          value={usernote.text}
          onChange={handleChange}
        />
        <input
          type='text'
          name='lable'
          placeholder='Lable'
          value={usernote.lable}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default NotesForm
