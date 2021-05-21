import React, { useState } from 'react'

const NotesForm = () => {
  const [note, setNote] = useState({
    title: '',
    text: '',
    lable: '',
  })

  const handleChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('done')
    console.log(note)
    setNote({
      ...note,
      text: '',
      title: '',
      lable: '',
    })
  }
  return (
    <div>
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
