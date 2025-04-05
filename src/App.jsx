import { HashRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import Layout from './layout'
import Home from './pages/Home'
import About from './pages/About'
import Academy from './pages/Academy'
import Megan from './pages/Megan'

import OneToOne from './pages/OneToOne'
import EnglishGroups from './pages/EnglishGroups'
import MeganClasses from './pages/MeganClasses'
import Materials from './pages/Materials'

import NoMatch from './pages/NoMatch'

export default function App() {
    return (
        <HashRouter basename="/">
            <ScrollToTop>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/academy' element={<Academy />} />
                        <Route path='/megan' element={<Megan />} />

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
