import React, { useState } from 'react'
import { ALPHABET_LIST } from '../utils/helper'
import hero from '../assets/images/png/hero-image.png';
import profile from '../assets/images/png/profile.png';
import Header from './Header';
import { DownArrow } from '../utils/icons';
import { useSearchParams } from 'react-router-dom';
const Hero = () => {
    const [text, setText] = useState()
    const handleChange = (item) => {
        setText(`${item}`)
    }

    const [ searchParams , setSearchParams ] = useSearchParams()
        searchParams.get('value')

    const handleSearch = (value) => {
        setSearchParams({ value  })
    }

    

    return (
        <div className='py-2.5'>
            <Header />
            <div className='max-w-[1160px] mx-auto px-4'>
                <div className='flex items-center gap-[5px] pt-[17px] max-xl:overflow-x-auto pb-2'>
                    <button onClick={() => handleSearch('all')} className={`px-[13px] pt-[2px] pb-[1px] leading-[24px] max-md:leading-[18px] text-xs font-medium bg-white border border-solid border-dark-black rounded-[9px] transition-all duration-300 ${searchParams.get('value') === 'all' ? 'text-white !bg-dark-black' : ''}`}>All</button>
                    <button onClick={() => handleSearch('pop')} className={`px-[11px] pt-[2px] pb-[1px] text-xs leading-[24px] max-md:leading-[18px] font-medium bg-white border border-solid border-dark-black rounded-[9px] transition-all duration-300 ${ searchParams.get('value') === 'pop' ? 'text-white !bg-dark-black' : ''} `}>Pop</button>
                    <button onClick={() => handleSearch('rock')} className={`px-[11px] pt-[2px] pb-[1px] text-xs leading-[24px] max-md:leading-[18px] font-medium bg-white border border-solid border-dark-black rounded-[9px] transition-all duration-300 ${ searchParams.get('value') === 'rock' ? 'text-white !bg-dark-black' : ''}`}>Rock</button>
                    <button onClick={() => handleSearch('more')} className={`px-[9px] pt-[2px] pb-[1px] text-xs leading-[24px] max-md:leading-[18px] font-medium bg-white border border-solid border-dark-black rounded-[9px] transition-all duration-300 flex items-center gap-[5px] group ${ searchParams.get('value') === 'more' ? 'text-white !bg-dark-black' : ''}`}>More <DownArrow myClass={`transition-all duration-300 ${ searchParams.get('value') === 'more' ? 'stroke-white' : ''}`}/> </button>
                    <div className='flex items-center gap-[2px]'>
                        {ALPHABET_LIST.map((item, index) => (
                            <button
                                onClick={() => handleChange(item)}
                                key={index}
                                className='flex uppercase items-center hover:bg-[#14191C] size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-[18px]'>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='bg-[#14191C] rounded-[22px] flex pl-12 pr-[43px] justify-between pt-[38px] mt-[35px] relative pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20'>
                    <h1 className='font-montserrat text-5xl leading-[58.51px] text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl uppercase'>
                        Hit Me Hard and {searchParams.get('value') === 'all' ? 'all' : searchParams.get('value') === 'pop' ? 'Pop' : searchParams.get('value') === 'rock' ? 'Rock' : searchParams.get('value') === 'more' ? 'More': 'Soft'} 
                    </h1>
                    <img src={hero} alt="hero" className='size-[261px] max-lg:size-48 max-sm:mx-auto max-sm:mt-4' />
                    <div className='absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-6'>
                        <img src={profile} alt="profile" className='size-[206px] max-lg:size-32 max-sm:size-20' />
                        <div className="flex flex-col">
                            <p className='font-semibold text-[32px] max-lg:text-2xl leading-[42px] text-white max-sm:text-lg'> Billie Eilish <span className='uppercase'> {text} </span> </p>
                            <p className='font-      font-medium text-base leading-5 text-light-sky-blue pt-[5px] max-lg:pt-0 pb-[21px] max-sm:text-sm'>Released May 17, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero