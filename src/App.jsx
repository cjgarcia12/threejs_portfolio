import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";

const App = () => {
    return (
        <main>
            <Hero />
            <div className='max-w-7xl mx-auto relative'>
                <Navbar />

                <About />
                <Projects />
                {/*<Experience /> to be added later*/}
                <Contact />
                <Footer />
            </div>

        </main>
    )
}
export default App
