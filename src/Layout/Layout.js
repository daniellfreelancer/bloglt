import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (

        <main className='mb-5' >
            <header className='mb-5'>
                <NavBar />
                <Outlet />
                <Footer/>
            </header>
        </main>

    )
}
