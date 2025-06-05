import React from 'react'
import { developerInfo } from '@/data'
import Dots from './decoration/dots'
import Image from 'next/image'

function FunFacts() {
  return (
    <div className='w-full flex gap-8 justify-between'>
      <div className={`w-full md:w-2/3 flex flex-wrap gap-4`}>
        {developerInfo.funFacts.map((item, index) => (
          <div key={index} className='border border-[var(--gray)] p-2'>
            {item.text}
          </div>
        ))}
      </div>

      <div className='w-1/3 relative hidden md:block'>
        <Dots className='top-0 left-0' size={8} gap={1}/>
        <Image src={"/images/icons/logooutline.svg"} alt='' height={128} width={128} className='absolute right-5 bottom-5'/>
      </div>
    </div>
  )
}

export default FunFacts