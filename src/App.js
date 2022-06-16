import React from 'react'
import Navbar from './Components/Navbar'
import Slider from './Components/slider'
import Sparkle from './Components/sparkle'
import WorkSection from './Components/work'
import Property from './Components/property'
import NFTDetail from './Components/NFTDetail'
import About from './Components/about'
import FAQ from './Components/FAQ'
import Footer from './Components/footer'

function App() {
    return (
        <div className="bg-[#EEEEEE] md:px-20 sm:px-10 py-5 overflow-x-hidden body">
            <Navbar/>
            <div className="mt-10 w-full lg:flex block">
                <Slider/>
                <Sparkle/>
            </div>
            <WorkSection/>
            <Property/>
            <NFTDetail/>
            <About/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default App
