import { format } from 'date-fns'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({_id, title, summary, cover, content,createdAt, author}) {
  return (

    <div className='post bg-warning p-2'>
      <div className='image'>
        <Link to={`/post/${_id}`} >
         <img src={`https://exuberant-pink-angelfish.cyclic.app/${cover}`} alt='img-post' />
        </Link>
        
      </div>

      <div className='text'>
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        
        <p className='info my-2'>
          <p className='author' >por: {author?.username || 'Administrador'}</p>
          <time>{ format(new Date(createdAt), 'MMM d, yyyy HH:mm') }</time>

        </p>
        <p className='summary' >{summary}</p>
      </div>

    </div>

  )
}
