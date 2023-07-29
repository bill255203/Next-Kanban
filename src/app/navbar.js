import React from 'react';
import Image from 'next/image';

const navbar = () => {
  return (
    <div className='navbar flex flex-row'>
      <Image
        src={'/icon.png'}
        alt='next'
        width={100}
        height={0}
        className='ml-[30px] my-[20px] h-[80px] '
      />
      <div className='title font-bold text-[30px] text-center my-[40px] '>
        KANBAN
      </div>
      <div className='rightNav flex flex-row w-full h-full justify-end'>
        <div className='sign text-center bg-green-300 text-[20px] p-[10px] m-[30px] font-bold'>
          Sign In
        </div>
        <div className='log text-center  bg-green-300 text-[20px] p-[10px] m-[30px] me-[80px] font-bold'>
          Log In
        </div>
      </div>
    </div>
  );
};

export default navbar;
