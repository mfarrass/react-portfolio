import "./app.scss"
import "./global.scss"
import { useState, useEffect } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import HashLoader from "react-spinners/HashLoader";


function App() {
  const [loading , setLoading] = useState(false)
  useEffect( () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    },5000)
  },[])

  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      {
        loading ? 
        <HashLoader color={'#6F2232'} loading={loading}  size={150} />
        : 
        <>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        {/* <Testimonials /> */}
        <About />
        <div>
        <Contact />
        <Footer />
        </div>
      </div>
      </>
      }
    </div>
  );
}


export default App;