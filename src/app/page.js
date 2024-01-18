import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Showroom from './components/ShowroomSection'
import Suppliers from './components/Suppliers'

export default function Home() {
  return (
    <>
    <main>
      <Navbar />
      <div className='card'>
      <Suppliers/>
      <Showroom />
      </div>
      <Footer />
    </main>
    </>
  )
}