import React from 'react'
import { withRouter } from 'react-router'
import Notes from './Notes'
import NotesForm from './NotesForm'

const Content = (props) => {
  console.log(props.history)
  return (
    <div className='content'>
      <NotesForm />
      <Notes />
    </div>
  )
}

export default withRouter(Content)
