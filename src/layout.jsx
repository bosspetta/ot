import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'

export default function Layout() {
    return (
        <main className="main-wrapper">
            <div className="main-content">
                <Header />
                <MainMenu />
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}
