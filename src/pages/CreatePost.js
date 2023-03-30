import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'
import Editor from '../components/Editor'


export default function CreatePost() {


    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [content, setContent] = useState("")
    const [files, setFiles] = useState('')
    const goHomePage = useNavigate()


    async function createNewPost(e){
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0])
        e.preventDefault();
 

       const response = await fetch('https://exuberant-pink-angelfish.cyclic.app/post',{
            method:'POST',
             body: data,
             credentials: 'include'
        })

        
        if (response.ok){
            goHomePage('/')
        }

        console.log(await response.json())


    }

    
    return (
        <div className='container p-5'>
            <form className='w-100' onSubmit={createNewPost} >
                <div className="mb-3">
                    <label 
                    htmlFor="title" 
                    className="form-label">Titulo</label>
                    <input 
                    type="title" 
                    className="form-control" 
                    id="title" 
                    aria-describedby="title" 
                    placeholder='Aqui va el titulo' 
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label 
                    htmlFor="title" 
                    className="form-label">Resumen</label>
                    <input 
                    type="summary" 
                    className="form-control" 
                    id="summary" 
                    aria-describedby="summary" 
                    placeholder='Aqui va el resumen' 
                    value={summary} 
                    onChange={(e)=>setSummary(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label 
                    htmlFor="file" 
                    className="form-label">Foto</label>
                    <input 
                    type="file" 
                    className="form-control" 
                    id="file" 
                    aria-describedby="file"
                    onChange={(e)=>setFiles(e.target.files)}/>
                </div>
                {/* <div className="mb-3"> */}
                    {/* <label 
                    htmlFor="post" 
                    className="form-label">Post</label>
                    <textarea  type="textarea" rows="3"  className="form-control" id="post" aria-describedby="post" placeholder='Aqui va el texto completo'/> */}
                    {/* <ReactQuill 
                    value={content} 
                    onChange={(newValue)=>setContent(newValue)} 
                    modules={modules} 
                    formats={formats}/>
                </div> */}
                <Editor value={content} onChange={setContent} />
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </div>
    )
}
