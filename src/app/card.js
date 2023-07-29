import React from 'react';

const card = () => {
  return (
    <>
      <div className='card w-[200px] h-[200px] bg-gray-300 m-[20px] p-[20px] '>
        <div className='task flex flex-row font-bold'>Task 1</div>
      </div>
      <div className='card w-[200px] h-[200px] bg-gray-300 m-[20px] p-[20px] '>
        <div className='task flex flex-row font-bold'>Task 2</div>
      </div>
    </>
  );
};

export default card;
