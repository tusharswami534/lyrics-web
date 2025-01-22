import React, { useState } from 'react'
import { ALPHABET_LIST } from '../utils/helper'
import hero from '../assets/images/png/hero-image.png';
import profile from '../assets/images/png/profile.png';
import Header from './Header';
import { DownArrow } from '../utils/icons';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate()
    const {id = 'all'} =useParams() 
    const [ , setActive] = useState(id)
    const handleClick = (id) => {
        navigate(`/${id}`)
        setActive(id)
    }
    
    

    // Search Params 
    const [, setText] = useState()
    const [ searchParams , setSearchParams ] = useSearchParams()
    const value =  searchParams.get('value')
    const handleSearch = (value ,item) => {
        setSearchParams({ value  })
        setText(`${item}`)
    }
    return (
        <div className='py-2.5'>
            <Header />
            <div className='max-w-[1160px] mx-auto px-4'>
                <div className='flex items-center gap-[5px] pt-[17px] max-xl:overflow-x-auto pb-2'>
                    <button onClick={() => handleClick('all')} className={`px-[13px] pt-[2px] pb-[1px] leading-[24px] max-md:leading-[18px] text-xs font-medium bg-white border border-solid border-dark-black rounded-[9px] transition-all duration-300 ${(id === 'all' || id === '') ? '!bg-[#14191C] text-white' : ''}`}>All</button>
                    <button onClick={() => handleClick('pop')} className={`px-[11px] pt-[2px] pb-[1px] text-xs leading-[24px] max-md:leading-[18px] font-medium bg-white border border-solid border-dark-black rounded-[9px] transition-all duration-300 ${id === 'pop' ? '!bg-[#14191C] text-white' : ''} `}>Pop</button>
                    <button onClick={() => handleClick('rock')} className={`px-[11px] pt-[2px] pb-[1px] text-xs leading-[24px] max-md:leading-[18px] font-medium bg-white border border-solid border-dark-black rounded-[9px] transition-all duration-300 ${id === 'rock' ? '!bg-[#14191C] text-white' : ''} `}>Rock</button>
                    <button onClick={() => handleClick('more')} className={`px-[9px] pt-[2px] pb-[1px] text-xs leading-[24px] max-md:leading-[18px] font-medium bg-white border border-solid border-dark-black rounded-[9px] transition-all duration-300 flex items-center gap-[5px] group ${id === 'more' ? '!bg-[#14191C] text-white' : ''}`}> More<DownArrow myClass={`transition-all duration-300 ${id === 'more' ? 'stroke-white' : ''}`}/></button>
                    <div className='flex items-center gap-[2px]'>
                        {ALPHABET_LIST.map((item, index) => (
                            <button
                                onClick={() => handleSearch(item)}
                                key={index}
                                className={`flex uppercase items-center hover:bg-[#14191C] hover:bg-opacity-45 size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-[18px] ${searchParams.get('value') === item ? 'bg-[#14191C] text-white' : ''}`}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='bg-[#14191C] rounded-[22px] flex pl-12 pr-[43px] justify-between pt-[38px] mt-[35px] relative pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20'>
                    <h1 className='font-montserrat text-5xl leading-[58.51px] text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl uppercase'>
                    Hit Me Hard and  {id === 'pop' ? ' Pop' : id === 'rock' ? ' Rock' : id === 'more' ? ' More' : (id === 'all' || id === '/') ? ' Soft' : ' Soft'}
                    </h1>
                    <img src={hero} alt="hero" className='size-[261px] pointer-events-none max-lg:size-48 max-sm:mx-auto max-sm:mt-4' />
                    <div className='absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-6'>
                        <img src={profile} alt="profile" className='size-[206px] pointer-events-none max-lg:size-32 max-sm:size-20' />
                        <div className="flex flex-col">
                            <p className='font-semibold text-[32px] max-lg:text-2xl leading-[42px] text-white max-sm:text-lg'> Billie Eilish <span className='uppercase'> {value}</span> </p>
                            <p className='font-medium text-base leading-5 text-light-sky-blue pt-[5px] max-lg:pt-0 pb-[21px] max-sm:text-sm'>Released May 17, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero