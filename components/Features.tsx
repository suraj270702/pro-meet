import Image from 'next/image'
import React from 'react'
import featureImg from '../img/hero-bg/feature-1.svg'

const Features = () => {
  return (
    <div className='w-[96%] lg:w-[90%] mx-auto mt-10'>
        <div className='py-[50px] lg:py-[100px] flex flex-col-reverse lg:flex-row gap-10 items-center justify-center'>
            <div className='w-full lg:w-1/2'>
                <h1 className='text-[28px] lg:text-[64px] text-[#434343] font-bold leading-[34px] lg:leading-[78px]'>Create your pro-meet page in flash</h1>
                <h1 className='text-[14px] lg:text-[20px] text-[#434343] font-[500]  mt-[12px] lg:mt-[32px]'>Start earning $$ by the time you finish reading our website</h1>
                <h1 className='text-[14px] lg:text-[20px] text-[#434343] font-[500]  mt-[12px] lg:mt-[32px] underline cursor-pointer'>Launch your page</h1>


            </div>
            <div className='w-full lg:w-1/2'>
                <Image src={featureImg} alt='' />
            </div>
        </div>

    </div>
  )
}

export default Features