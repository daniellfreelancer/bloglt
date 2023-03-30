import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Editor from '../components/Editor'


export default function EditPost() {

    const {id} = useParams();


    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [content, setContent] = useState("")
    const [files, setFiles] = useState('')
    const goHomePage = useNavigate()




    useEffect(() => {

        fetch(`https://exuberant-pink-angelfish.cyclic.app/post/${id}`).then((response)=>{
            response.json().then((pos)=>{
                setTitle(pos?.title)
                setSummary(pos?.summary)
                setContent(pos?.content)

            })
        })

    }, [id])
    




    async function updatePost(e){
        e.preventDefault();

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id)

        if(files?.[0]){
            data.set('file', files?.[0])
        }
        

        const response = await fetch('https://exuberant-pink-angelfish.cyclic.app/post',{
            method:'PUT',
             body: data,
             credentials: 'include'
        })

        
        if (response.ok){
            goHomePage(`/post/${id}`)
        }

        console.log(await response.json())

    }

  return (
    <div className='container p-5'>
            <form className='w-100' onSubmit={updatePost}  >
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
                {/* <div className="mb-3">
                    <ReactQuill 
                    value={content} 
                    onChange={(newValue)=>setContent(newValue)} 
                    modules={modules} 
                    formats={formats}/>
                </div> */}

                <Editor onChange={setContent} value={content} />
                <button type="submit" className="btn btn-success">Actualizar</button>
            </form>
        </div>
  )
}
