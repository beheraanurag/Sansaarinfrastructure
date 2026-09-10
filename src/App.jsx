import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Leadership = lazy(() => import('./pages/Leadership'))
const OurBusiness = lazy(() => import('./pages/OurBusiness'))
const Projects = lazy(() => import('./pages/Projects'))
const WhySansaar = lazy(() => import('./pages/WhySansaar'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center text-sm uppercase tracking-[0.2em] text-steel">
      Loading
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/our-business" element={<OurBusiness />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/why-sansaar" element={<WhySansaar />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
