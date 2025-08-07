import HeroSection from './HeroSection'
import Navbar from './navbar'


export default function Header() {
  return (
    <header className='h-screen flex flex-col '>
      <Navbar/>
      <HeroSection/>
    </header>
  )
}
