import React from "react"
import Image from "next/image"
import { findRenderedComponentWithType } from "react-dom/test-utils"
const Hero =()=>{
return(
    <div className = 'h-auto w-[1280px]'>
  <div className = 'bg-[#F7F7F7]  h-[72px] w-[1280px] top-[170px] left-[100px] pr-[64px] pl-[62px] flex  items-center border-b-[2px]  border-black  justify btween mt-6'>
  <div className = 'flex items-center gap-[10.5px]'>
    
   <h1 className = 'text-[14.05 px] font-bold mr-[20] '> Ddsgnr</h1>
  </div>
  <nav className='flex items-center justify-end ml-[65px] w-full '>
<ul className='flex items-center text-[14px]  gap-[39px] bg-[#FFFFFF]  h-[44px] w-[920px]'>
<li className='cursor-pointer  p-2 w-16  border-b-3 border-black'>Home</li>
<li className='cursor-pointer  p-2 w-16  border-b-3 border-black'>Course</li>
<li className='cursor-pointer  p-2 w-16  border-b-3 border-black'>Services</li>
<li className='cursor-pointer  p-2 w-16  border-b-3 border-black'> Achievements</li>
<li className='cursor-pointer  p-2 w-16  border-b-3 border-black'>About-Us</li>
<li className='cursor-pointer  p-2 w-16  border-b-3 border-black'>Testimonials</li>

<li className='ml-7'>
  <button className="bg-white border-black text-black px-4 py-2 rounded hover:bg-slate-500 font-robotto pt-[8px] pr-[20px] pb-[8px] pl-[20px]">
    Login
  </button>
</li>

<li>
  <button className='bg-black text-white px-4 py-2 hover:bg-gray-800  font-robotto pb-[8px] pt-[8px] pr-[20px] pl-[20px]'> 
    Sign Up
  </button>
</li>
</ul>
</nav>
  </div>
<div className="h-[800px] w-[1280px] flex">
<div className="flex flex-col justify-start pt-[80px]">
<h1 style={{fontWeight:"700"}} className="text-[64px]  pt-[120px]  pl-[80px] font-roboto"> <span className="block"> Learn New Skills </span> <span className="block"> Online With Ease</span></h1>
<h1 style={{fontWeight:"400"}} className="text-[18px]  pt-[120px]  pl-[80px] font-roboto"> <span className="block"> Discover a Wide range of courses  covering a variety of subjects </span> <span className="block"> subjects,taught by expert instructors</span></h1>
<div className="flex gap-[15px] pt-[20px] pl-[80px]">
<button style={{fontWeight:'400'}} className='bg-black text-white px-4 py-2 rounded font-roboto  pt-[8px] pb-[8x] pr-[20px] pl-[20px] '>
  Start Learning now
</button>
<button  style ={{fontWeight:"400"}}className="bg-white text-black  border border-black px-4 py-2 rounded pt-[8px] pl-[20px] pr-[20px] pb-[8px]  font-roboto ">Explore Courses</button>
</div>
</div>
 <div className="flex justify-end ml-auto">

  <img src='Images/Image.svg' height={900} width={640}></img>
 </div>
</div>
<div className="bg-[#F7F7F7]  w-[1280px] h-[228px] top-[1038] left-[100] pt-[80px] pb-[80px] pr-[64px] pl-[64px] gap-[64px] flex items-center">
<h1 style={{fontWeight:"700"}} className="font-roboto text-[24px] pl-1 h-auto w-[350px] "><span className="block">Trusted by 2000+ Companies</span><span className="block"> worldwide</span></h1>
<div className="flex gap-[20px] pt-[8.75px] pb-[8.75px] ">
<img src='Images/Airbnb Logo.svg' height={38.52} width={123.8} ></img>
<img src="Images/Airbnb Logo copy.svg" height={38.52} width={123.8}></img>
<img src="Images/image2.png" height={38.52} width={123.8}></img>
<img src="Images/image3.png" height={38.52} width={123.8}></img>
<img src="/Images/image4.png" height={38.52} width={123.8}></img>
<img src="Images/image.png" height={38.52} width={123.8}></img>
</div>
</div>

<div className="bg-[#FFFFFF] h-[1049px]  w-[1280px]  top-[112px]  left-[100px] pt-[112px] pr-[64px] pb-[112px] pl-[64px] gap-6 flex flex-col items-center">
<h2 style={{fontWeight:"700"}} className="font-roboto text-[48px] h-[58px] w-[768px] "> Explore courses by category</h2>
<h2 style={{fontWeight:"400"}} className="font-roboto text-[18px] h-[27px] w-[768px] pt-3 pr-5 ">Discover a wide range of courses coveringa  variety of subjects, taught by expert instructors</h2>
 <div className="flex justify-center gap-[32px] pt-[70px]">


  <div className='bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px]' >
   <img className='h-[100px] w-[100px] gap-[10px]' src='Images/1Frame 292.svg' height={50} width={50}></img> 
   <div>
    <h3 style={{fontWeight:"600"}} className="font-roboto text-[20px] h-[30px] w-auto"> Design & Development</h3>
    <h3 style={{fontWeight:"400"}} className="font-roboto text-[18pxpx] w-auto"> 50+ Courses available</h3>
    </div> 
     </div>

  <div className='bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px]' >
  <img className="h-[100px] w-[100px] gap-[10px]" src="Images/2Frame 292.svg" height={50} width={50}></img>
  <div>
    <h3 style={{fontWeight:"600"}} className="font-roboto text-[20px] h-[30px] w-auto"> Marketing</h3>
    <h3 style={{fontWeight:"400"}} className="font-roboto text-[18pxpx] w-auto">  Courses available</h3>
    </div>  
    </div> 


<div className="bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px]">
<img className="h-[100px] w-[100px] gap-[10px]" src="Images/3Frame 292.svg" height={50} width={50}></img>
<div>
<h3 style={{fontWeight:"600"}} className="font-roboto text-[20px] h-[30px] w-auto"> Development</h3>
<h3 style={{fontWeight:"400"}} className="font-roboto text-[18pxpx] w-auto">   50+ Courses available</h3>
</div>
</div>
 </div>

 <div className="flex justify-center gap-[32px] pt-[50px]">
<div className="bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px]">
<img className="h-[100px] w-[100px] gap-[10px]" src='Images/4Frame 292.svg' height={50} width={50}></img>
<div>
<h3 style={{fontWeight:"600"}} className="font-roboto text-[20px] h-[30px] w-auto"> Communication</h3>
<h3 style={{fontWeight:"400"}} className="font-roboto text-[18pxpx] w-auto">   50+ Courses available</h3>
</div>
</div>

<div className="bg-[#F7F7F7]  rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px]">
<img className="h-[100px] w-[100px] gap-[10px]" src='Images/5Frame 292.svg' height={50} width={50}></img>
<div>
<h3 style={{fontWeight:"600"}} className="font-roboto text-[20px] h-[30px] w-auto"> Digital Marketing</h3>
<h3 style={{fontWeight:"400"}} className="font-roboto text-[18pxpx] w-auto">   50+ Courses available</h3>
</div>
</div>

<div className="bg-[#F7F7F7]  rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px]">
<img className="h-[100px] w-[100px] gap-[10px]" src='Images/arrow-2.svg' height={50} width={50}></img>
<div>
<h3 style={{fontWeight:"600"}} className="font-roboto text-[20px] h-[30px] w-auto"> Self Development</h3>
<h3 style={{fontWeight:"400"}} className="font-roboto text-[18pxpx] w-auto">   50+ Courses available</h3>
</div>
</div>
 </div>

 <div className="flex justify-center gap-[32px] pt-[50px]">
<div className="bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px]">
<img className="h-[100px] w-[100px] gap-[10px]" src='Images/briefcase.svg' height={50} width={50}></img>
<div>
<h3 style={{fontWeight:"600"}} className="font-roboto text-[20px] h-[30px] w-auto"> Business</h3>
<h3 style={{fontWeight:"400"}} className="font-roboto text-[18pxpx] w-auto">   50+ Courses available</h3>
</div>
</div>

<div className="bg-[#F7F7F7]  rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px]">
<img className="h-[100px] w-[100px] gap-[10px]" src='Images/book.svg' height={50} width={50}></img>
<div>
<h3 style={{fontWeight:"600"}} className="font-roboto text-[20px] h-[30px] w-auto"> Finance</h3>
<h3 style={{fontWeight:"400"}} className="font-roboto text-[18pxpx] w-auto">   50+ Courses available</h3>
</div>
</div>

<div className="bg-[#F7F7F7]  rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px]">
<img className="h-[100px] w-[100px] gap-[10px]" src='Images/book.svg' height={50} width={50}></img>
<div>
<h3 style={{fontWeight:"600"}} className="font-roboto text-[20px] h-[30px] w-auto"> Consulting</h3>
<h3 style={{fontWeight:"400"}} className="font-roboto text-[18pxpx] w-auto">   50+ Courses available</h3>
</div>
</div>
 </div>

<div className="pt-[30px]">

  <button style={{fontWeight:"400"}}  className="bg-white border border-black text-black px-4 rounded font-roboto py-2 pl-[20px] pr-[20px]" >
    View All Courses
  </button>
</div>
</div>

<div className="bg-[#FFFFFF] h-[488px] w-[1280px] top-[2272px] left-[100px] pt-[112px] pb-[112px] pr-[64px] pl-[64px] mt-[40px] gap-[80px] ">
<div className="h-[160px] w-[1152px]">
<h2 style={{fontWeight:"700"}} className="h-[58px] w-[1152px]  text-[48px] pl-[365px] font-roboto">Our Achievements</h2>
<h2 style={{fontWeight:"400"}} className="h-[54px] w-[1152px]  text-[18px] pt-[30px] font-roboto items-center">lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique . Dius cursus , mi quis viverra</h2>
</div>

<div className="flex gap-[24px] pb-10 p-[20px] ">
  <div>
<h3 style={{fontWeight:"700"}} className="w-[296px] text-[40px] font-roboto"> +200</h3>
  <h3 style={{fontWeight:"400"}} className="w-[59px] text-[16px] pl-[20px] font-roboto"> Courses</h3>  
  </div>

  <div>
<h3 style={{fontWeight:"700"}} className="w-[296px] text-[40px] font-roboto">50K </h3>
  <h3 style={{fontWeight:"400"}} className="w-[59px] text-[16px] pl-[20px] font-roboto"> Mentors</h3>  
  </div>
  <div>
<h3 style={{fontWeight:"700"}} className="w-[296px] text-[40px] font-roboto"> 370K</h3>
  <h3 style={{fontWeight:"400"}} className="w-[59px] text-[16px] pl-[20px] font-roboto"> Students</h3>  
  </div>

  <div>
<h3 style={{fontWeight:"700"}} className="w-[296px] text-[40px] font-roboto"> 100+</h3>
  <h3 style={{fontWeight:"400"}} className="w-[59px] text-[16px] pl-[20px] font-roboto"> Recognition</h3>  
  </div>
   </div>
</div>


<div className="bg-[#FFFFFF] h-[488px] w-[1280px] top-[2272px] left-[100px] pt-[112px] pb-[112px] pr-[64px] pl-[64px] mt-[40px] gap-[80px] ">
<div className="h-[160px] w-[1152px]">
<h2 style={{fontWeight:"700"}} className="h-[58px] w-[1152px]  text-[48px] pl-[365px] font-roboto">Our Achievements</h2>
<h2 style={{fontWeight:"400"}} className="h-[54px] w-[1152px]  text-[18px] pt-[30px] font-roboto items-center">lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique . Dius cursus , mi quis viverra</h2>
</div>

<div className="flex gap-[24px] pb-10 p-[20px] ">
  <div>
<h3 style={{fontWeight:"700"}} className="w-[296px] text-[40px] font-roboto"> +200</h3>
  <h3 style={{fontWeight:"400"}} className="w-[59px] text-[16px] pl-[20px] font-roboto"> Courses</h3>  
  </div>

  <div>
<h3 style={{fontWeight:"700"}} className="w-[296px] text-[40px] font-roboto">50K </h3>
  <h3 style={{fontWeight:"400"}} className="w-[59px] text-[16px] pl-[20px] font-roboto"> Mentors</h3>  
  </div>
  <div>
<h3 style={{fontWeight:"700"}} className="w-[296px] text-[40px] font-roboto"> 370K</h3>
  <h3 style={{fontWeight:"400"}} className="w-[59px] text-[16px] pl-[20px] font-roboto"> Students</h3>  
  </div>

  <div>
<h3 style={{fontWeight:"700"}} className="w-[296px] text-[40px] font-roboto"> 100+</h3>
  <h3 style={{fontWeight:"400"}} className="w-[59px] text-[16px] pl-[20px] font-roboto"> Recognition</h3>  
  </div>
   </div>
</div>

<div className=" bg-[#FFFFFF0]h-[1642px] w-[1280px]">
<div>
  <h1 style={{fontWeight:"700"}} className="text-[56px] text-center font-roboto"> Courses</h1>
  <h1 style={{fontWeight:"400"}} className="text-[18px] text-center font-roboto"> Your Ultimate Guide to Learning</h1>
</div>

<div className="h-auto w-[1152px]">
<nav className="flex items-center pt-[50px] pl-[460px]">
<ul className="flex items-center text-center">
<li style={{fontWeight:"400"}} className="p-2 text-[16px] font-roboto cursor-pointer border-b-[1px]  border-black justify-center w-[87px] mx-auto text-right inline-flex">Popular</li>
<li className="font-roboto text-[16px]  pl-[24px] cursor-pointer pr-[16px]"> Recommended</li>
<li className="font-roboto text-[16px]  pl-[24px] cursor-pointer pr-[16px]"> Best Price</li>
</ul>
</nav>
</div>

<div className=" flex justify-center mt-[80px] pr-[35px] ">

<div className="flex gap-[24px]">
<div className="bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] p-4">
<img className="h-[300px]  w-[416px]" src="Images/1Image.svg" height={100} width={100}
></img>
<div className="flex pt-[20px]">
  <h3 style={{fontWeight:"600"}} className="text-[14px} h-[21px] w-[326px] font-roboto pl-[10px]">Design</h3>
  <img className="h-[24px] w-[24px] pb-[5px]" src="Images/Star.svg" height={100} width={100}></img>
</div>

<div className="pl-[10px] pt-[10px]">
<h5 style={{fontWeight:"700"}} className="text-[24px] h-[34px] font-roboto  w-[382px]"> UX/UI Design 201 </h5>
<h6 style={{fontWeight:"600"}} className="text-[16px] font-roboto h-[48px]  w-[383px] pt-[10px]">lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique . Dius cursus , mi quis viverra</h6>
</div>

 <div className="flex items-centergap-[16px] pt-[35px] pl-[10px] gap-[35px] ">
 <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 text-[16px] py-2 rounded font-roboto pr-[20px] pl-[20px]">
      Enroll Now
</button>
<h1 style={{fontWeight:"600"}} className="font-roboto  h-[24px] text-[16px] w-[37px]">$400</h1>
 </div>
</div>

<div className="bg-[#F7F7F7] rounded-lg  h-[534px] w-[416px] pr-4 ">
  <img className="h-[300px] w-[416px]" src="Images/2Image.svg" height={100} width={100}></img>
  <div className="flex pt-[20px]">
<h3 style={{fontWeight:"600"}} className="font-roboto text-[14px] h-[21px] w-[320px] pl-[10px]"> Programming</h3>
<img className="h-[24px] w-[24px] pb-[50x]" src="Images/Star 1.svg" height={100} width={100}
></img>
<h3 style={{fontWeight:"600"}} className="font-roboto text-[14px] h-[21px] w-[320px] pl-[10px]"> 5.0</h3>

</div>
<div className=' pl-[10px] pt-[10px]'>
        <h5 style={{ fontWeight: '700' }} className='font-roboto text-[24px] h-[34px] w-[382px]' >Introduction to Python</h5>
        <h6 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[48px] w-[382px] pt-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h6>
      </div>
      <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 text-[16px] py-2 rounded font-roboto pr-[20px] pl-[20px]">
      Enroll Now
            </button>
            <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[37px]'>$400</h1>
</div>
</div>
</div>
</div>

  <div className='bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] pr-4'>
<div className="flex gap-[24px]">
  <div className="bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] pl-4">
<img className="h-[300px] w-[416px]" src="Images/3Image.svg" height={100} width={100}></img>
<div className="flex pt-[20px]">
  <h3 style={{fontWeight:"600"}} className="font-roboto h-[21px] text-[14px] w-[326px] pl-[10px]"> Business</h3>
  <Image className='h-[24px] w-[24px] pb-[5px]' src={"Images/Star 1.svg"} alt='Star' width={100} height={100}/>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[24px] w-[20px] pl-[5px]'>5.0</h3>
      </div>
      <div className=' pl-[10px] pt-[10px]'>
        <h5 style={{ fontWeight: '700' }} className='font-roboto text-[24px] h-[34px] w-[382px]' >Data Analysis For Beginners</h5>
        <h6 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[48px] w-[382px] pt-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h6>
      </div>
      <div className='flex items-center gap[16px] pt-[35px] pl-[10px] gap-[35px]'>
      <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 text-[16px] py-2 rounded font-roboto pr-[20px] pl-[20px]">
      Enroll Now
            </button>
            <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[37px]'>$400</h1>

</div>
  </div>

  <div className='bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] pr-4'>
<div className="flex gap-[24px]">
  <div className="bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] pl-4">
<img className="h-[300px] w-[416px]" src="Images/33Image.svg" height={100} width={100}></img>
<div className="flex pt-[20px]">
  <h3 style={{fontWeight:"600"}} className="font-roboto h-[21px] text-[14px] w-[326px] pl-[10px]"> Art</h3>
  <Image className='h-[24px] w-[24px] pb-[5px]' src={"Images/Star 1.svg"} alt='Star' width={100} height={100}/>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[24px] w-[20px] pl-[5px]'>5.0</h3>
      </div>
      <div className=' pl-[10px] pt-[10px]'>
        <h5 style={{ fontWeight: '700' }} className='font-roboto text-[24px] h-[34px] w-[382px]' >Art Specialization </h5>
        <h6 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[48px] w-[382px] pt-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h6>
      </div>
      <div className='flex items-center gap[16px] pt-[35px] pl-[10px] gap-[35px]'>
      <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 text-[16px] py-2 rounded font-roboto pr-[20px] pl-[20px]">
      Enroll Now
            </button>
            <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[37px]'>$400</h1>
</div>
</div>
<div className='bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] pr-4'>
<div className="flex gap-[24px]">
  <div className="bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] pl-4">
<img className="h-[300px] w-[416px]" src="Images/34Image.svg" height={100} width={100}></img>
<div className="flex pt-[20px]">
  <h3 style={{fontWeight:"600"}} className="font-roboto h-[21px] text-[14px] w-[326px] pl-[10px]"> Law</h3>
  <Image className='h-[24px] w-[24px] pb-[5px]' src={"Images/Star 1.svg"} alt='Star' width={100} height={100}/>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[24px] w-[20px] pl-[5px]'>5.0</h3>
      </div>
      <div className=' pl-[10px] pt-[10px]'>
        <h5 style={{ fontWeight: '700' }} className='font-roboto text-[24px] h-[34px] w-[382px]' >Rule Of Law </h5>
        <h6 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[48px] w-[382px] pt-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h6>
      </div>
      <div className='flex items-center gap[16px] pt-[35px] pl-[10px] gap-[35px]'>
      <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 text-[16px] py-2 rounded font-roboto pr-[20px] pl-[20px]">
      Enroll Now
            </button>
            <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[37px]'>$400</h1>
</div>
</div>
<div className='bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] pr-4'>
<div className="flex gap-[24px]">
  <div className="bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] pl-4">
<img className="h-[300px] w-[416px]" src="Images/56Image.svg" height={100} width={100}></img>
<div className="flex pt-[20px]">
  <h3 style={{fontWeight:"600"}} className="font-roboto h-[21px] text-[14px] w-[326px] pl-[10px]">Tech</h3>
  <Image className='h-[24px] w-[24px] pb-[5px]' src={"Images/Star 1.svg"} alt='Star' width={100} height={100}/>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[24px] w-[20px] pl-[5px]'>5.0</h3>
      </div>
      <div className=' pl-[10px] pt-[10px]'>
        <h5 style={{ fontWeight: '700' }} className='font-roboto text-[24px] h-[34px] w-[382px]' >Introduction To Webflow </h5>
        <h6 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[48px] w-[382px] pt-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h6>
      </div>
      <div className='flex items-center gap[16px] pt-[35px] pl-[10px] gap-[35px]'>
      <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 text-[16px] py-2 rounded font-roboto pr-[20px] pl-[20px]">
      Enroll Now
            </button>
            <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[37px]'>$400</h1>
</div>
</div>
</div>
</div>




</div>
</div>


</div>
  </div>

</div>

</div>


</div>


    
)
}
export default Hero