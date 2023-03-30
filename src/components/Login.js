// import React, { useState } from 'react'

// export default function Login() {

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     function login(e){
//         e.preventDefault();



//     }

//     return (
//         <div className='container my-5'>
//             <form className='w-50'>
//                 <div class="mb-3">
//                     <label for="exampleInputEmail1" class="form-label">email</label>
//                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=> setEmail(e.target.value)}  />
//                     {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
//                 </div>
//                 <div class="mb-3">
//                     <label for="exampleInputPassword1" class="form-label">Password</label>
//                     <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e)=> setPassword(e.target.value)} />
//                 </div>
//                 <button type="submit" class="btn btn-primary">Ingresar</button>
//             </form>
//         </div>
//     )
// }


import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {setUserInfo} = useContext(UserContext)

  // async function loginUser(e) {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:4000/blog/login', {
  //       email,
  //       password
  //     });
  //     console.log(response.data);
  //     let isResponse = response.data;
  //     let isSuccess = isResponse.success;

  //     if (isSuccess) {
  //       console.log(isSuccess);
  //       setTimeout(()=>{
  //           navigate('/dashboard');
  //       },2000)
       
  //     } else {
  //       console.log(isResponse.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  async function loginToken(e) {
    e.preventDefault();
    const responses = await fetch('https://exuberant-pink-angelfish.cyclic.app/blog/loginToken', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })

    console.log(responses)

    if (responses.ok) {
      responses.json().then(userInfo =>{

        setUserInfo(userInfo)
        navigate('/dashboard');
      })
      
    }

  }


  // async function login() {
  //   try {
  //     const response = await axios.post('http://localhost:4000/blog/loginToken', {
  //       email,
  //       password,
  //     }, {
  //       withCredentials: true,
  //     });

  //     console.log(response)
  //   if (response.ok) {
  //     navigate('/dashboard');
  //   }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  return (
    <div className='container my-5'>
      <form className='w-50' onSubmit={loginToken}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  )
}
