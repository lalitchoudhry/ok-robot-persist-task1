import React from 'react';

// ASSETS IMPORTS
import discordIcon from '../assets/icons/discord.png';

const AskQBtn = () => {
  return (
    <a href='https://discord.gg/wzzZJxqKYC' className='fixed bottom-10 right-10 px-5 py-1 rounded-md shadow-sm flex justify-between items-center font-medium text-sm md:text-lg text-white bg-discord hover:bg-hover z-10'>
        Ask Q
        <img className='w-8 mx-2' src={discordIcon} alt="icon" />
    </a>
  )
}

export default AskQBtn;