import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNote } from './../actions/notesActions'
const NotesForm = () => {
  const [note, setNote] = useState({
    title: '',
    text: '',
    lable: '',
  })

  const createdNote = useSelector((state) => state.createNote)

  const { loading, notes, error } = createdNote

  console.log(notes)

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(note)
    dispatch(createNote(note))
    setNote({
      ...note,
      text: '',
      title: '',
      lable: '',
    })
  }
  return (
    <div>
      {error ? <span className='error'>{error}</span> : null}
      <form className='notes-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name='text'
          cols='5'
          rows='5'
          placeholder='Text'
          value={note.text}
          onChange={handleChange}
        />
        <input
          type='text'
          name='lable'
          placeholder='Lable'
          value={note.lable}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default NotesForm
