import React from 'react'
import rasm1 from "./img/rasm1.png"
import rasm2 from "./img/rasm2.png"
import rasm3 from "./img/rasm3.png"

const LastCardHolder = () => {
  return (
    <>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 px-8 md:px-10 lg:px-[110px] mt-[100px] mb-10">
        <div className="border shadow-lg border-slate-200 grid grid-cols-1 gap-5 justify-center items-center">
                <div>
                    <img src={rasm1} alt="" className='aspect-[3.95/2]'/>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center p-3'>
                    <h1 className='text-2xl font-bold'>Webni belgilang</h1>
                    <p className='text-lg  text-slate-400'>Some quick example text to build on the card title <span className="pr-14">and make up the bulk of the card's content</span></p>
                    <button className='bg-cyan-400 text-white border border-cyan-200 rounded-lg px-4 py-1 hover:bg-white hover:text-black transition-all duration-300 mb-4 mt-4'>Go somowhere</button>
                </div>
            </div>
            <div className="border shadow-lg border-slate-200 grid grid-cols-1 gap-5 justify-center items-center">
                <div>
                    <img src={rasm2} alt="" className='aspect-[3.95/2]'/>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center p-3'>
                    <h1 className='text-2xl font-bold'>Webni belgilang</h1>
                    <p className='text-lg   text-slate-400'>Some quick example text to build on the card title <span className="pr-14">and make up the bulk of the card's content</span></p>
                    <button className='bg-cyan-400 text-white border border-cyan-200 rounded-lg px-4 py-1 hover:bg-white hover:text-black transition-all duration-300 mb-4 mt-4'>Go somowhere</button>
                </div>
            </div>
            <div className="border shadow-lg border-slate-200 grid grid-cols-1 gap-5 justify-center items-center">
                <div>
                    <img src={rasm3} alt="" className='aspect-[3.95/2]'/>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center p-3'>
                    <h1 className='text-2xl font-bold'>Webni belgilang</h1>
                    <p className='text-lg text-slate-400'>Some quick example text to build on the card title <span className="pr-14">and make up the bulk of the card's content</span></p>
                    <button className='bg-cyan-400 text-white border border-cyan-200 rounded-lg px-4 py-1 hover:bg-white hover:text-black transition-all duration-300 mb-4 mt-4'>Go somowhere</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default LastCardHolder