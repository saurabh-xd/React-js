import React from 'react'
import Footer from './components/footer/footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Header/>
        <Outlet />
        <Footer/>
        </>
    )
}

export default Layout
