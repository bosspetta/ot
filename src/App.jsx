import { HashRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import Layout from './layout'
import Home from './pages/Home'
import QueEsEnon from './pages/QueEsEnon'
import Yoga from './pages/Yoga'
import Mindfulness from './pages/Mindfulness'
import YogaRestaurativo from './pages/YogaRestaurativo'
import Quiromasaje from './pages/Quiromasaje'
import Contacto from './pages/Contacto'
import NoMatch from './pages/NoMatch'
import SchedulesPrices from './pages/SchedulesPrices'
import Normas from './pages/Normas'
import External from './pages/External'

export default function App() {
    return (
        <HashRouter basename="/">
            <ScrollToTop>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/que-es-enon' element={<QueEsEnon />} />
                        <Route path='/yoga' element={<Yoga />} />
                        <Route path='/mindfulness' element={<Mindfulness />} />
                        <Route path='/yoga/restaurativo' element={<YogaRestaurativo />} />
                        <Route path='/masaje' element={<Quiromasaje />} />
                        <Route path='/mas-actividades' element={<External />} />
                        <Route path='/contacto' element={<Contacto />} />
                        <Route path='/horarios' element={<SchedulesPrices />} />
                        <Route path='/normas' element={<Normas />} />

                        <Route path='*' element={<NoMatch status={404} />} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </HashRouter>
    )
}
