import { HashRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import Layout from './layout'
import Home from './pages/Home'
import About from './pages/About'
import Academy from './pages/Academy'
import Materials from './pages/Materials'

import OneToOne from './pages/OneToOne'
import EnglishGroups from './pages/EnglishGroups'
import MeganClasses from './pages/MeganClasses'

import NoMatch from './pages/NoMatch'
import Comunidad from './pages/Comunidad'

export default function App() {
    return (
        <HashRouter basename="/">
            <ScrollToTop>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/academy' element={<Academy />} />
                        <Route path='/community' element={<Comunidad />} />

                        <Route path='/one-to-one' element={<OneToOne />} />
                        <Route path='/groups' element={<EnglishGroups />} />
                        <Route path='/megan-classes' element={<MeganClasses />} />
                        <Route path='/materials' element={<Materials />} />

                        <Route path='*' element={<NoMatch status={404} />} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </HashRouter>
    )
}
