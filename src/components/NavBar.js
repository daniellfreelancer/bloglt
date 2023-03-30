import React, { useContext, useEffect } from 'react'
import logoLT from '../assets/logoLivingTrade.png'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'
export default function NavBar() {



const {setUserInfo, userInfo } = useContext(UserContext)

async function isLogin(){
 const response = await fetch('https://exuberant-pink-angelfish.cyclic.app/blog/dashboard',{
    credentials: 'include'
  })
  
  try {
    if (response) {
      response.json().then((res)=>{
        console.log(res)
        if(res.email){
          setUserInfo(res)
          // setEmail(res.email)
        } else {
          setUserInfo(null)
        }
      }).catch((error)=>{
        console.log(error)
      })
    } else {
      console.log('No hay usuario logueado')
    }

  } catch (error) {
    console.log(error)
  }

}

  useEffect(() => {

    isLogin()

  })


 function logout(){
    fetch('https://exuberant-pink-angelfish.cyclic.app/blog/logoutToken', {
          method:'POST',
          headers: {'Content-Type':'application/json'},
          credentials:'include',
        });
        setUserInfo(null)

  }
  

  const email = userInfo?.email


  return (
    <nav className="navbar navbar-expand-lg nav-bg">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}><img className='logo-img' src={logoLT} alt='logo' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
        {
          email && ( <>
            <span> Hola, {userInfo?.email} </span>
            <Link className='btn text-light' to={"/create"}> Crear nuevo post</Link>
            <button className='btn btn-danger' onClick={logout}>Salir</button>
          </>)
        }

        {!email && (
          <>
                  <li className="nav-item">
            <Link className="nav-link" to='/login' >Ingresar</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/register' >Registro</Link>
        </li>
          </>
        )}

      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}
