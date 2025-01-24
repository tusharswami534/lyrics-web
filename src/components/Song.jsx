import React, { useState } from 'react'
import { ALPHABET_LIST, TABLE_DATA_LIST, TABLE_HEADING_LIST } from '../utils/helper'
import { useSearchParams } from 'react-router-dom'

const Song = () => {

  const [image, setImage] = useState('')
  function handleImage(e) {
    const url = URL.createObjectURL(e.target.files[0])
    setImage(url)
  }

  function deleteImage() {
    setImage('')
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
    <>
    <div className='pt-[106px] max-lg:pt-20 max-md:pt-16 max-sm:pt-12 px-4 max-w-[1160px] mx-auto'>
      <h2 className='font-poppins text-custom-gray max-lg:pb-3 font-semibold lg:-mb-8 leading-[58.45px] max-lg:leading-[48px] max-md:leading-[40px] max-sm:leading-[32px] text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl'>Songs</h2>
      <div className='max-w-[1140px] gap-[51px] pb-[45px] max-lg:pb-9 max-md:pb-8 max-sm:pb-3 max-lg:gap-12 max-md:gap-8 max-sm:gap-3 max-md:flex-col max-lg:items-center mx-auto flex'>
        <table className='w-full lg:mt-[52px]'>
          <thead>
            <tr>
              {TABLE_HEADING_LIST.map(function (heading, index) {
                return <th key={index} className={`${index === 3 ? "text-right" : "text-left"} font-semibold text-sm max-sm:text-xs leading-6 pb-[33px]`}>{heading}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA_LIST.map(function (data, index) {
              return <tr key={index}>
                <td className='text-sm max-sm:text-xs leading-6 text-custom-pink pb-11 max-md:pb-8 max-sm:pb-5 max-lg:pr-1'>0{index + 1}</td>
                <td className='font-semibold text-sm max-sm:text-xs leading-6 pb-11 max-md:pb-8 max-sm:pb-5 lg:w-7/12 max-lg:w-5/12'>{data.song}</td>
                <td className='text-light-gary text-xs max-sm:text-[10px] leading-6 pb-11 max-md:pb-8 max-sm:pb-5'>Nov 4, 2023</td>
                <td className='text-light-gary text-xs max-sm:text-[10px] leading-6 text-right pb-11 max-md:pb-8 max-sm:pb-5'>{data.timesPlayed}</td>
              </tr>
            })}
          </tbody>
        </table>
        <input hidden onChange={handleImage} type="file" id='image' />
        <div className='min-h-[600px] max-md:min-h-[500px] max-sm:min-h-[400px] relative max-w-[300px] w-full overflow-hidden group bg-blue rounded-2xl flex justify-center items-center mx-auto'>
          {image ? <div><img src={image} alt="images" /><button onClick={deleteImage} className='absolute top-4 right-4 text-white'>X</button></div> : <label className='cursor-pointer absolute flex justify-center items-center w-full h-full text-center bg-blue-500 text-white ' htmlFor="image">Add Place</label>}
        </div>
      </div>
    </div>
      <div className='flex items-center gap-[5px] pt-[41px] pb-[36px] max-lg:py-8 max-md:py-6 max-sm:py-4 max-lg:px-4 max-xl:overflow-x-auto border-t border-solid border-sky-blue border-b mb-2'>
        <div className='flex max-w-[1160px] justify-center mx-auto items-center gap-[2px]'>
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
    </>
  )
}

export default Song