import React from 'react'
import Image from 'next/image'
// import hero from '../Components/Img/chrome_mIA100o9RG.png'


const Boxes = ({ProjectName , image , link}) => {
  return (
    <>
    <div style={{width:350}} className='box rounded-2xl p-5 hover:border-lime-500 hover:animate-pulse'>
        <div className='flex flex-row items-center justify-between'> 
            <div className='flex flex-row gap-2'>
                <div className='bg-red-500 h-7 w-7 rounded-full  '></div>
                <div className='bg-yellow-500 h-7 w-7 rounded-full '></div>
                <div className='bg-green-500 h-7 w-7 rounded-full '></div>
            </div>
            <p className='text-gray-400 text-2xl'>Personal</p>
        </div>
            <hr className='mt-8' />
            <a href={link} target='_blank'>
        <div className='flex flex-col gap-3 mt-8'>
            <h1 className='text-4xl font-semibold'>{ProjectName}</h1>
            <h1 className='heading-2'>Currently Working on</h1>
            <h1 className='heading-2'>2022</h1>
        <div className='mt-6'>
            <Image className='border-2 rounded-2xl' src={image} objectFit='contain' alt='Not Available' width={320} height={200} />
        </div>
        <div className='flex justify-between p-4'>
            <h1 className='text-2xl text-blue-600 cursor-pointer font-semibold'><a href={link} target='_blank'>Visit 🤜</a></h1>
        </div>
        </div>
        </a>
    </div>
    </>
  )
}

export default Boxes