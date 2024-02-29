import React from 'react'
import { FaQuoteLeft, FaQuoteRight  } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function Card(probs) {
   let data=probs.data;
  return (
    <div className='max-w-[600px] text-center flex flex-col justify-center items-center bg-white p-5 sm:px-11 py-9 relative gap-6 rounded-lg'>
        <div className='absolute -top-20 sm:left-10'>
            <div className=' rounded-full bg-violet-500 w-28 h-28 relative '>
                <div className='rounded-full w-28 h-28 overflow-hidden absolute -bottom-2 -left-2'>
                    <img src={data.image} alt="" className='' />
                </div>
            </div>
        </div>
        <div>
            <h2 className=' font-bold text-xl'>{data.name}</h2>
            <h2 className='text-violet-500'>{data.job}</h2>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <FaQuoteLeft className='text-violet-500'size={12}/>
            <p className='my-2 text-sm text-slate-500'>{data.text}</p>
            <FaQuoteRight className='text-violet-500'size={12}/>
        </div>
        <div className='flex gap-6'>
            <IoIosArrowBack className='text-violet-400 hover:text-violet-500 cursor-pointer'size={25} onClick={probs.previous}/>
            <IoIosArrowForward className='text-violet-400 hover:text-violet-500 cursor-pointer'size={25} onClick={probs.next}/>
        </div>
        <button type="button" className='bg-violet-400 text-white px-8 py-2 rounded-lg hover:bg-violet-500' onClick={probs.surprise}>Surprise Me</button>
    </div>
  )
}

export default Card