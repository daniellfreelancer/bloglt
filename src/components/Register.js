import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// export default function Register() {

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [username, setUsername] = useState("")
//     const [role, setRole] = useState("admin")
//     const [from, setFrom] = useState("blog")

//     // async function registerUser(e){

//     //     e.preventDefault()
//     //     await fetch('http://localhost:4000/blog/register', {
//     //         method: 'POST',
//     //         body: JSON.stringify({
//     //             username,
//     //             email,
//     //             password,
//     //             role,
//     //             from
//     //         }),
//     //         headers: {'Content-Type': 'application/json'}
//     //     }).then((res)=>{
//     //         let inputForm = document.querySelector("#contact");
//     //         console.log(res.response)

//     //     }).catch((error)=>{
//     //         console.log(error)
//     //     })
//     // }
//     const navigate = useNavigate();
    

//     async function registerUser(e) {
//         e.preventDefault();
//         try {
//           const response = await axios.post('http://localhost:4000/blog/register', {
//             username,
//             email,
//             password,
//             role,
//             from
//           });
//           let inputForm = document.querySelector("#contact");
//           console.log(response.data);
//           let isResponse = response.data;
//           let isSuccess = isResponse.success;

//           if ( isSuccess ) {
//             console.log(isSuccess)
//             toast.success(isResponse.message)
            
//             setTimeout(() => {
//                 inputForm.reset()
//                 navigate('/login');
//             }, 2000);
            
//           } else {
//             toast.error(response.data.message)
//           }

//         } catch (error) {
//           console.log(error);
//           toast(error)
//         }
//       }

//   return (
//     <div className='container my-5'>
//     <form className='w-50' onSubmit={registerUser} id="contact">
//     <div className="mb-3">
//             <label htmlFor="usernameRegister" className="form-label">Usuario</label>
//             <input 
//             type="text" 
//             className="form-control" 
//             id="usernameRegister"
//             value={username}
//             onChange={(e)=> setUsername(e.target.value)} />
//             {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
//         </div>
//         <div className="mb-3">
//             <label htmlFor="emailRegister" className="form-label">Email</label>
//             <input 
//             type="email" 
//             className="form-control" 
//             id="emailRegister"
//             value={email}
//             onChange={(e)=> setEmail(e.target.value)} />
//             {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
//         </div>
//         <div className="mb-3">
//             <label htmlFor="passwordRegister" className="form-label">Password</label>
//             <input 
//             type="password" 
//             className="form-control" 
//             id="passwordRegister"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit" className="btn btn-primary">Registro</button>
//     </form>
//     <ToastContainer />
// </div>
//   )
// }

// export default function Register() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [username, setUsername] = useState('');
//     const [role, setRole] = useState('admin');
//     const [from, setFrom] = useState('blog');
//     const navigate = useNavigate();
  
//     async function registerUser(e) {
//       e.preventDefault();
//       try {
//         const response = await axios.post('http://localhost:4000/blog/register', {
//           username,
//           email,
//           password,
//           role,
//           from
//         });
//         let inputForm = document.querySelector('#contact');
//         console.log(response.data);
//         let isResponse = response.data;
//         let isSuccess = isResponse.success;
  
//         if (isSuccess) {
//           console.log(isSuccess);
//           toast.success(isResponse.message);
  
//           setTimeout(() => {
//             inputForm.reset(); // Borra los campos del formulario
//             navigate('/login');
//           }, 2000);
//         } else {
//           toast.error(response.data.message);
//         }
//       } catch (error) {
//         console.log(error);
//         toast.error(error.message);
//       }
//     }
  
//     return (
//       <div className='container my-5'>
//         <form className='w-50' onSubmit={registerUser} id='contact'>
//           <div className='mb-3'>
//             <label htmlFor='usernameRegister' className='form-label'>
//               Usuario
//             </label>
//             <input
//               type='text'
//               className='form-control'
//               id='usernameRegister'
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor='emailRegister' className='form-label'>
//               Email
//             </label>
//             <input
//               type='email'
//               className='form-control'
//               id='emailRegister'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor='passwordRegister' className='form-label'>
//               Password
//             </label>
//             <input
//               type='password'
//               className='form-control'
//               id='passwordRegister'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type='submit' className='btn btn-primary'>
//             Registro
//           </button>
//         </form>
//         <ToastContainer />
//       </div>
//     );
//   }

export default function Register() {
    const [values, setValues] = useState({
      email: '',
      password: '',
      username: '',
      role: 'admin',
      from: 'blog'
    });
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('https://exuberant-pink-angelfish.cyclic.app/blog/register', values);
        console.log(response.data);
        const { success, message } = response.data;
  
        if (success) {
          toast.success(message);
          setTimeout(() => {
            setValues({
              email: '',
              password: '',
              username: '',
              role: 'admin',
              from: 'blog'
            });
            navigate('/login');
          }, 2000);
        } else {
          toast.error(message);
        }
      } catch (error) {
        console.log(error);
        toast.error('Error al registrar');
      }
    };
  
    return (
      <div className='container my-5'>
        <form className='w-50' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='usernameRegister' className='form-label'>
              Usuario
            </label>
            <input
              type='text'
              className='form-control'
              id='usernameRegister'
              name='username'
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='emailRegister' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='emailRegister'
              name='email'
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='passwordRegister' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='passwordRegister'
              name='password'
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Registro
          </button>
        </form>
        <ToastContainer />
      </div>
    );
  }
