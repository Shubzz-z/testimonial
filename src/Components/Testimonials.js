import React, { useState } from 'react'
import Card from './Card'

function Testimonials(probs) {
    const[index,setIndex]=useState(0);
    let data=probs.data;
    let length=data.length-1;
    function previous() {
        if(index<=0){
            setIndex(length);
        }else{
            setIndex(index-1);
        }
    }
    function next() {
        if(index>=length){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }
    function surprise() {
        setIndex(Math.floor(Math.random() * (length + 1)));
    }
    

  return (
    <div className='flex justify-center p-4'>
        <Card data={data[index]} previous={previous} next={next} surprise={surprise}/>
    </div>
  )
}

export default Testimonials