import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  console.log(Math.ceil(totalPosts / postsPerPage))
  const pageNumbers = []

  for (let index = 1; index <= Math.round(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index)
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a onClick={() => paginate(number)} href='!#'>
                {number}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination
