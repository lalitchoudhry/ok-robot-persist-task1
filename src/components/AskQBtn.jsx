import React from 'react';

// ASSETS IMPORTS
import discordIcon from '../assets/icons/discord.png';

const AskQBtn = () => {
  return (
    <a href='https://discord.gg/wzzZJxqKYC' className='fixed bottom-10 right-10 border-2 px-6 py-1 rounded-full shadow-sm flex justify-between items-center font-bold text-lg text-white bg-discord hover:bg-gray'>
        Ask Q
        <img className='w-8 mx-2' src={discordIcon} alt="icon" />
    </a>
  )
}

export default AskQBtn;