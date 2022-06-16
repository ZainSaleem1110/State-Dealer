import React from 'react'

function Navbar() {
    return (
        <div className="flex justify-between items-center md:px-0 px-3">
            <h1 className="font-bold sm:text-xl text-md">Lorem<span className="text-lightPurple">psum</span></h1>
            <button className="text-white bg-gradient-to-t from-mainPurple to-lightPurple sm:px-4 px-2 sm:py-2 py-1 rounded">Connect Wallet</button>
        </div>
    )
}

export default Navbar
