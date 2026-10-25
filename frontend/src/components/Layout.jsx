import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Layout() {
  return (
    <>
      <Header />
      <div id="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout