import { Outlet } from 'react-router-dom'
import { FloatingActions, MobileStickyBar } from '../common/FloatingActions'
import ScrollToTop from '../common/ScrollToTop'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main" className="pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <MobileStickyBar />
    </>
  )
}
