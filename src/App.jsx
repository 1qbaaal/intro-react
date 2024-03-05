import './App.css'
import './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
// import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
       <div style={{minHeight:'100vh'}}>
      { <Outlet/> }
      {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
