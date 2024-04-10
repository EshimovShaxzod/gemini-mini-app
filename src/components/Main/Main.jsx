import React from 'react'
import {assets} from '../../assets/assets'
import '../../index.css'

const Main = () => {
  return (
    <div className='flex-1 min-h-[100vh] pb-[15vh] relative'>
        <nav className='flex items-center justify-between p-4'>
            <h1 className='text-[20px]'>Gemini</h1>
            <img className='w-[50px] rounded-[50%]' src={assets.user_icon} alt="" />
        </nav>
        <div className='main-container max-w-[900px] mx-auto'>
            <div className='great my-14 text-[56px] text-[#283c86]'>
                <p><span>Hello Dev.</span></p>
                <p>How can I help you today ?</p>
            </div>
            <div className='cards grid grid-cols-3 gap-8'>
                <div className='card bg-[#ddd] rounded-md px-4 pt-4 pb-14 relative'>
                   <p>Suggest beautiful places to see on an upcoming road trip</p>
                   <img className='w-[30px] absolute right-2 bottom-2' src={assets.compass_icon} alt="" />
                </div>

                <div className='card bg-[#ddd] rounded-md px-4 pt-4 pb-14 relative'>
                   <p>Briefly summarize this concept: urban planning</p>
                   <img className='w-[30px] absolute right-2 bottom-2' src={assets.bulb_icon} alt="" />
                </div>

                <div className='card bg-[#ddd] rounded-md px-4 pt-4 pb-14 relative'>
                   <p>Brainstorm team bonding activities for our work retreat</p>
                   <img className='w-[30px] absolute right-2 bottom-2' src={assets.message_icon} alt="" />
                </div>
            </div>

            <div className='absolute bottom-0 w-full max-w-[900px] mx-auto px-5 py-12'>
                <div className='flex items-center justify-between gap-5 bg-[#ddd] px-6 py-4 rounded-lg'>
                    <input className='w-full bg-[#ddd] outline-none' type="text" placeholder='Enter a prompt here..' />
                    <div className='flex items-center gap-1'>
                        <img className='w-[25px] cursor-pointer' src={assets.gallery_icon} alt="" />
                        <img className='w-[25px] cursor-pointer' src={assets.mic_icon} alt="" />
                        <img className='w-[25px] cursor-pointer' src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='text-center pt-3'>This web application was developed by Shahzod Eshimov</p>
            </div>
        </div>
       
    </div>
  )
}

export default Main