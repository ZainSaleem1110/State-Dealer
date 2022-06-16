import React from 'react'

function about() {
    return (
        <div className="flex justify-center mt-28">
        <div className="lg:w-[80%] w-[100%] py-16 lg:px-16 md:px-3 px-10 grid md:grid-cols-2 grid-col gap-x-4 items-center bg-gradient-to-tr from-mainPurple to-lightPurple rounded-2xl">
            <h1 className="text-2xl text-white font-bold">About Everything Web3</h1>
            <p className="text-white font-medium md:mt-0 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec fermentum hac enim, viverra dui leo, sit quam. Aliquam magna sed arcu euismod elit eu. Ac aliquam, pretium eget dolor. Pulvinar volutpat, convallis velit tristique enim amet et odio.</p>
        </div>
        </div>
    )
}

export default about
