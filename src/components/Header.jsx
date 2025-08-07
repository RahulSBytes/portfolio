import HeroSection from './HeroSection'
import Navbar from './navbar'


function Header() {
  return (
    <header className='h-screen flex flex-col border'>
      <Navbar/>
      <HeroSection/>
    </header>
  )
}

export default Header