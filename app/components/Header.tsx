import React from 'react'
import Link from 'next/link'

 const Header = () => {
  return (
    <div className='bg-[#F7F7F7] flex items-center  space-x-3 h-[54px] max-w-screen-xl top-[100px] left-[100px] pl-[62px] pr-[64px] w-1280px '>
       <h6 className='font-roboto text-[14px]'> Phone Number: +92319 266 343</h6>
       <span className='border-[#676767 ] border-1-2 h-6 mx-2'> Email: info@ddsgnr.com</span>
       

       <div className ='flex gap-5 jutify-end w-[680px]'>
         <a href ='https://www.facebook.com'>
         <img src ='Images/Facebook.svg' height={24} width={24} ></img>
         </a>

<a href ='https://www.intsagram.com'>
<img src='Images/Instagram.svg' height={24} width={24}></img>
</a>

<a href='https://www.X.com'>
<img src=' Images/Twitter.svg' height={24} width={24}></img>
</a>

<a href='https://www.linkedin.com/'>
<img src='Images/LinkedIn.svg' height={24} width={24}></img>
</a>

       </div>


      
    </div>
  )
}

export  default Header
  