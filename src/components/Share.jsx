import React from 'react'
import svg from "./img/icon.png"
import rasm from "./img/phone.png"

const Share = () => {
  return (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card flex flex-col gap-3 border border-slate-400 p-10  hover:bg-purple-600 hover:text-white transition-all bg-white duration-300">
              <div className='w-20 p-2 bg-purple-600 rounded-full'>
                <img src={svg} alt="" />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Bulutli vps</h1>
                <p className='text-slate-400 text-lg w-[250px]'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card flex flex-col gap-3 border border-slate-400 p-10  hover:bg-purple-600 hover:text-white transition-all bg-white duration-300">
              <div className='w-20 p-2 bg-purple-600 rounded-full'>
                <img src={svg} alt="" />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Bulutli vps</h1>
                <p className='text-slate-400 text-lg w-[250px]'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card flex flex-col gap-3 border border-slate-400 p-10  hover:bg-purple-600 hover:text-white transition-all bg-white duration-300">
              <div className='w-20 p-2 bg-purple-600 rounded-full'>
                <img src={svg} alt="" />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Bulutli vps</h1>
                <p className='text-slate-400 text-lg w-[250px]'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card flex flex-col gap-3 border border-slate-400 p-10  hover:bg-purple-600 hover:text-white transition-all bg-white duration-300">
              <div className='w-20 p-2 bg-purple-600 rounded-full'>
                <img src={svg} alt="" />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Bulutli vps</h1>
                <p className='text-slate-400 text-lg w-[250px]'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <img src={rasm} alt="" className='w-[500px]'/>
            <h1 className='text-4xl font-bold'>Bizning asosiy xizmatlarimiz</h1>
            <p className='text-xl font-semibold'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
          </div>
        </div>
    </>
  )
}

export default Share