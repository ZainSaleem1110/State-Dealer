import React from 'react'
import {AiFillYoutube,AiOutlineInstagram} from 'react-icons/ai'
import DiscordIcon from '../assest/images/discord.png'

function footer() {
    return (
        <div className="grid md:grid-cols-3 grid-col md:justify-between justify-center items-center">
            <h1 className="font-bold sm:text-xl text-md">Lorem<span className="text-lightPurple">psum</span></h1>
            <p className="text-gray-400 text-sm text-center md:mt-0 mt-3">© 2022 All Rights Reserved</p>
            <div className="flex items-center md:justify-end justify-start text-gray-400 text-3xl md:mt-0 mt-3">
                <AiFillYoutube/>
                <a href="" className="ml-4">
                    <img src={DiscordIcon} alt="" />
                </a>
                <AiOutlineInstagram className="ml-4"/>
            </div>
        </div>
    )
}

export default footer
