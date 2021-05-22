import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getNotes } from '../actions/notesActions'

const Notes = (props) => {
  const userLogin = useSelector((state) => state.login)
  const {
    userInfos: { user },
  } = userLogin

  const dispatch = useDispatch()

  const userNotes = useSelector((state) => state.notes)

  const { notes } = userNotes

  useEffect(() => {
    dispatch(getNotes(user._id))
  }, [user])

  return (
    <div className='notes'>
      <div>
        {notes
          ? notes.map((note) => {
              const { _id, title, text, lable } = note

              return (
                <ul key={_id}>
                  <li>{title}</li>
                </ul>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default withRouter(Notes)
