import React from 'react'
import CardHolder from './CardHolder'
import Question from './Question'
import Share from './Share'

const WhyUs = () => {
  return (
    <>
        <div className="bg-grey-holder bg-gray-100 mb-10 mt-10 px-8 md:px-10 lg:px-[110px]">
            <div className="WhyUs pt-20 flex flex-col gap-5 justify-center items-center">
                <center>
                <h1 className='text-5xl font-bold'>Nega bizni tanlaysiz</h1>
                <p className='text-xl pt-10 pb-10 lg:pt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, necessitatibus!</p>
                </center>
                <div className='mb-10'>
                <CardHolder/>
                </div>
                <Question/>
                <Share/>
            </div>
        </div>
    </>
  )
}

export default WhyUs