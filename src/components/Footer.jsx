import React from 'react';
import { CiPaperplane } from 'react-icons/ci';

const Footer = () => {
  return (
    <div className='w-screen h-full bg-[#d0c3f1] flex justify-center items-center'>
      <div className='bg-lime-300 rounded-2xl mx-2 p-4 w-full'>
        <div className='flex items-center flex-col gap-2'>
          <p className='text-sm'>LETS WORK TOGETHER</p>
          <p className='text-2xl'>chioma.ugwu@rocketmail.com </p>
        </div>

        <div className='flex items-center flex-col pt-10'>
          <button className='text-white group px-6 py-3 my-2 flex items-center rounded-2xl bg-black hover:bg-gray-700'>
            <span className='group-hover:scale-125 duration-300'>
              <CiPaperplane className='mr-2 size-5' />
            </span>
            Lets Connect
          </button>
        </div>

        <div className='flex items-center flex-col gap-2 pt-10'>
          <div>
            <p>VERSION</p>
            <p>2024@Edition</p>
          </div>
          <div>
            <p>BASED IN</p>
            <p>Nigeria. Open To Relocation and Online Work</p>
          </div>
        </div>

        <div className='flex items-center justify-center flex-col gap-2 pt-10'>
          <h1>socials</h1>
          <ul>
            <li>DRIBBLE</li>
            <li>BEHANCE</li>
            <li>INSTAGRAM</li>
            <li>LINKEDIN</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
