import React from 'react'
import { withRouter } from 'react-router'
import Notes from './Notes'
import NotesForm from './NotesForm'

const Content = (props) => {
  return (
    <div className='content'>
      <NotesForm />
      <Notes />
    </div>
  )
}

export default withRouter(Content)
