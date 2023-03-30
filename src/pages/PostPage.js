import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatISO9075 } from 'date-fns'
import { UserContext } from '../UserContext';

export default function PostPage() {


    const [postInfo, setPostInfo] = useState(null)
    const {id} = useParams();

    const {userInfo} = useContext(UserContext);




    useEffect(() => {
        fetch(`https://exuberant-pink-angelfish.cyclic.app/post/${id}`).then((response)=>{
            response.json().then((pos)=>{
                setPostInfo(pos)
                console.log(pos)

            })
        })

    }, [id])

    if (!postInfo) return '';
    




  return (
    <div className='post-page'>
        <h1>{postInfo?.title}</h1>
        <time> {formatISO9075(new Date(postInfo?.createdAt))} </time>
        <div>
            <p>por @{postInfo?.author.username} </p>
        </div>
        {
            userInfo.id === postInfo.author._id && (
                <div className='py-5'>
                    <Link to={`/edit/${postInfo?._id}`} className='btn btn-secondary'>Editar</Link>
                </div>
            )
        }
        <div className='image-post' >
        <img src={`https://exuberant-pink-angelfish.cyclic.app/${postInfo?.cover}`} alt='img-post' />
        </div>
        
      <div dangerouslySetInnerHTML={{__html:postInfo?.content}} >

      </div>

    </div>
  )
}
