import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Backdrop } from './Backdrop'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <div className="relative flex min-h-screen flex-col">
      <Backdrop />
      <Navbar />
      <div className="relative flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
