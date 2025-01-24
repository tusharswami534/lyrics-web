import React, { useState } from 'react'
import { PageLogo, SearchIcon } from '../utils/icons'

const Header = () => {
const [open , setOpen] = useState(false)

    function handleSearch (e){
        e.preventDefault()
    }

    const handleClick =() => {
        setOpen(!open)
        document.body.style.overflow = open ? '' : 'hidden'
    }
    
    return (
        <div className='px-3'>
            <div className='max-w-[1128px] w-full shadow-[0px_10px_10px_0px_#31374D1A] pl-[38.48px] rounded-[20px] items-center py-2.5 pr-3 max-md:p-3 flex justify-between mx-auto'>
                <a className='max-w-svg' href="/"><PageLogo /></a>
                <div className='max-w-[650px] max-sm:max-w-[300px] max-sm:hidden max-md:max-w-[400px] max-xl:mx-2 w-full p-[6px_7px_6px_30px] max-md:pl-2.5 border border-solid border-sky-blue rounded-[144px]'>
                    <form onSubmit={handleSearch} className='flex  w-full justify-between'>
                        <input required placeholder="What do you feel like listening to right now ?" type="text" className='border-none placeholder:text-light-gary bg-transparent outline-none w-[85%] max-xl:w-[75%]' />
                        <button className='p-[11.94px_12.08px_11.08px_10.95px] bg-black rounded-full hover:scale-110 transition-all duration-300'><SearchIcon /> </button>
                    </form>
                </div>
                <div className={`flex gap-5 max-md:fixed max-md:top-0 max-md:z-10 max-md:w-full max-md:h-full max-md:bg-black max-md:flex-col max-md:justify-center max-md:items-center max-md:pt-2.5 max-md:px-3 max-md:transition-all max-md:duration-300 ${open ? 'max-md:right-0' : 'max-md:-right-full'}`}>
                    <button className='border-none outline-none hover:scale-110 transition-all duration-300 max-md:text-white'>Login</button>
                    <button className='pt-[9px] px-6 pb-2.5 whitespace-nowrap bg-black hover:scale-110 transition-all duration-300 text-white rounded-[9px] max-md:bg-white max-md:text-black'>Sign Up</button>
                    <div className='max-w-[650px] max-sm:max-w-[300px] max-sm:flex hidden max-md:max-w-[400px] max-xl:mx-2 w-full p-[6px_7px_6px_30px] max-md:pl-2.5 border border-solid border-sky-blue rounded-[144px]'>
                    <form onSubmit={handleSearch} className='flex  w-full justify-between'>
                        <input required placeholder="What do you feel like listening to right now ?" type="text" className='border-none placeholder:text-light-gary bg-transparent outline-none w-[85%] max-xl:w-[75%]' />
                        <button className='p-[11.94px_12.08px_11.08px_10.95px] bg-black rounded-full hover:scale-110 transition-all duration-300'><SearchIcon /> </button>
                    </form>
                </div>
                </div>
                <button onClick={handleClick} className='max-md:flex flex-col relative z-20 overflow-hidden size-6 justify-between hidden'>
                    <span className={`flex w-6 bg-black h-0.5 transition-all duration-300 ${open ? 'bg-white translate-x-10' : ''}`}></span>
                    <span className={`flex w-6 bg-black h-0.5 transition-all duration-300 relative after:absolute after:w-6 after:h-0.5 after:bg-black after:transition-all after:duration-300 after:top-0 ${open ? 'bg-white rotate-45 after:bg-white after:rotate-90' : ''}`}></span>
                    <span className={`flex w-6 bg-black h-0.5 transition-all duration-300 ${open ? 'bg-white -translate-x-10' : ''}`}></span>
                </button>
            </div>
        </div>
    )
}

export default Header