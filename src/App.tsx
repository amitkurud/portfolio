import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./components/About"
export default function App() {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <About/>
            <Footer/>
        </div>
    )
}