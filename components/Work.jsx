import React from 'react'
import Boxes from './Boxes'
import Link from 'next/link'


const Work = () => {
  return (
    <>
    <div className='justify-center flex flex-col items-center gap-20 mt-40'>
        <div className="about-section">
             <div className="about-main-heading">
                 <h1 className="about-heading">&lt;Work /&gt;</h1>
                 <h1 className=" name-heading font-black " style={{width:900}}>Featured Projects</h1>
             </div>
         </div>
         <div className='work relative right-40 sm:ml-40'>
             <p className="pb-8 text-4xl text-green-400 font-semibold">Some Selected Projects</p>
         </div>
             <div className='boxes grid grid-rows-3 sm:grid-rows-2 grid-flow-row gap-14 sm:grid-flow-col'>
                 <Boxes 
                  ProjectName = "REPLIT"
                  image = '/replit.png'
                  link = 'https://replit-clone.netlify.app/'
                 />
                 <Boxes 
                  ProjectName = "TOKA"
                  image= '/toka.png'
                  link = 'https://toka-vr.vercel.app/'
                />
                  <Boxes 
                   ProjectName = "ADDIDAS-CLONE"
                   image= '/addias.png'
                   link = 'https://adidas-clone-indol.vercel.app/'
                 />
                 <Boxes 
                  ProjectName = "AGENCY"
                  image= '/agency.png'
                  link = 'https://agency-website-vr.vercel.app/'
                />
                 <Boxes 
                  ProjectName = "ISRO-CLONE"
                  image= '/isro.png'
                  link = 'https://isro-clone-redesign.vercel.app/'
                  />
                  <Boxes 
                   ProjectName = "WEATHER-APP"
                   image= '/cloud.png'
                   link = 'https://weather-app-six-black.vercel.app/'
                   />
            
             </div>
             <div className='work-btn'>
              <Link href='/Progress'>
                  <button  className='resume-btn hover:text-white' >View More</button>
              </Link>
             </div>
    </div>
    </>
  )
}

export default Work