import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios';

export default function PostList() {
  const [financialPosts, setFinancialPosts] = useState([])
  useEffect(() => {
   

    // fetch('https://exuberant-pink-angelfish.cyclic.app/post').then((response)=>{
    // response.json().then((posts)=>{
    //   console.log(posts)
    //   setFinancialPosts(posts)
    // })
    // }).catch((error)=>{
    //   console.log(error)
    // })

    axios.get('https://exuberant-pink-angelfish.cyclic.app/post')
  .then((response) => {
    console.log(response.data);
    setFinancialPosts(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
  

  }, [])
  
  return (
    <>
    {
      financialPosts.length > 0 ? (    <div className='container my-5' >
      {
        financialPosts.length > 0 && financialPosts.map(post => {
          return (
              <Post {...post}  />
          )
        })
      }

    </div>) : <div><p>Cargando</p></div>
    }
    </>

  )
}
