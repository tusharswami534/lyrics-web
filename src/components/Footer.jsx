import React from 'react'
import { FOOTER_ARTIST_LIST, FOOTER_FOLLOW_US_LIST, FOOTER_LYRICS_WEB_LIST, FOOTER_SONGS_LIST } from '../utils/helper'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
       <div className='max-w-[1140px] pt-[67px] pb-[89px] max-lg:py-14 max-md:py-10 max-sm:py-8 max-lg:gap-10 justify-between max-xl:px-4 max-md:flex-col flex mx-auto'>
        <div className='max-w-[598px] w-full max-lg:w-full max-lg:max-w-[unset]'>
          <div className='flex justify-between'>
            <div className=' gap-y-6 max-md:gap-y-4 flex flex-col'>
              <h3 className='font-poppins leading-[24px] pb-[13px] font-semibold text-sm max-sm:text-sm'>LyricS Web</h3>
              {FOOTER_LYRICS_WEB_LIST.map((item, index) => (
                <NavLink className='text-sm text-dark-black leading-[24px] max-sm:text-xs transition-all duration-300 hover:text-sky-700' to={item.link} key={index}>{item.title}</NavLink>
                ))}
            </div>
            <div className=' flex gap-y-6 max-md:gap-y-4 flex-col'>
              <h3 className='font-poppins leading-[24px] pb-[13px] font-semibold text-sm max-sm:text-sm'>Songs</h3>
              {FOOTER_SONGS_LIST.map((item, index) => (
                <NavLink className='text-sm text-dark-black leading-[24px] max-sm:text-xs transition-all duration-300 hover:text-sky-700' to={item.link} key={index}>{item.title}</NavLink>
              ))}
            </div>
            <div className=' flex gap-y-6 max-md:gap-y-4 flex-col'>
              <h3 className='font-poppins leading-[24px] pb-[13px] font-semibold text-sm max-sm:text-sm'>Artist</h3>
              {FOOTER_ARTIST_LIST.map((item, index) => (
                <NavLink className='text-sm text-dark-black leading-[24px] max-sm:text-xs transition-all duration-300 hover:text-sky-700' to={item.link} key={index}>{item.title}</NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className='max-w-[312px] flex flex-col gap-[14px] w-full'>
          <h3 className='font-poppins leading-[24px] pb-2 font-semibold text-sm'>Follow us</h3>
          <div className='flex md:flex-col gap-6'>
          {FOOTER_FOLLOW_US_LIST.map((item, index) => (
              <NavLink target='_blank' className='text-sm leading-[24px]' to={item.link} key={index}><span className='max-w-[312ppx] max-md:w-max max-md:p-[unset] w-full rounded-[10px] bg-white flex items-center justify-between pl-[25px] pt-[11.65px] pb-[12px] hover:scale-105 transition-all duration-300 pr-[14.46px]'> <span className='max-md:hidden'>{item.title} </span> {item.icon}</span></NavLink>
            ))
          }
          </div>
        </div>
      </div>
      <div className='w-full border-t border-solid border-sky-blue pt-[31px] pb-[30px] max-md:py-5 max-lg:py-6'>
            <div className='max-w-[1131px] px-4 mx-auto w-full max-md:flex-col gap-3 justify-between flex'>
                <p className='max-md:text-center text-sm'>All rights reserved to Global Media Holdings Ltd. {year}</p>
                <div className='flex gap-[41px] max-lg:justify-center'>
                  <NavLink className='text-sm leading-[24px] max-md:text-center font-poppins text-black'>Privacy Policy</NavLink>
                  <NavLink className='text-sm leading-[24px] max-md:text-center font-poppins text-black'>Terms of Use</NavLink>
                </div>
            </div>
      </div>
    </>
  )
}

export default Footer