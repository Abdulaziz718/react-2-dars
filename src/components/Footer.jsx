import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="bg-purple-900">
            <div className='px-8 md:px-10 lg:px-[110px] flex flex-col gap-10 pb-10'>
                <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-center mt-20'>
                    <div>
                        <h1 className='text-slate-400 text-lg'>Oson taklifni oling</h1>
                        <h1 className='text-white text-3xl font-bold pt-3'>Bugun veb -xostingga yoziling!</h1>
                    </div>
                    <div>
                        <h1 className='text-slate-400 text-lg'>Hoziroq boshlang</h1>
                        <h1 className='pt-3 text-5xl text-white font-bold'>$ 4.50<span className='text-lg text-slate-400'>/oy</span></h1>
                    </div>
                    <div>
                        <button className='bg-blue-600 px-10 py-4 rounded-3xl hover:bg-transparent border border-blue-600 transition-all duration-300 text-white hover:text-blue-600'>Hoziroq Bowlang</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                <div className='flex flex-col gap-6 bg-purple-500 p-5 text-white'>
                        <h1>CoHost</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <button className='bg-purple-900 py-3 rounded-3xl mt-8'>explore</button>
                    </div>
                    <div className='flex flex-col gap-6 p-5 text-white'>
                        <h1 className='font-bold text-2xl'>Keraksiz havolalar</h1>
                        <ul className='text-slate-400 flex flex-col gap-3'>
                            <li>Serverlar</li>
                            <li>Winodws hosting</li>
                            <li>Bulutli hosting</li>
                            <li>IOS serverlar</li>
                            <li>Linux serverlar</li>
                            <li>Barchasi</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6  p-5 text-white'>
                        <h1 className='text-2xl font-bold'>Navigation</h1>
                        <ul className='text-slate-400 flex flex-col gap-3'>
                            <li>Uy</li>
                            <li>domain</li>
                            <li>Hosting</li>
                            <li>Haqida</li>
                            <li>Blog</li>
                            <li>Aloqa</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6  p-5 text-white'>
                        <h1 className='text-2xl font-bold'>navigation</h1>
                        <ul className='text-slate-400 flex flex-col gap-3'>
                            <li>Namangan shahar Oromgoh Afrosiyob-5 2-uy</li>
                            <li>+998 99 895 74 32</li>
                            <li>WebDevelopersCommunity</li>
                        </ul>
                    </div>
                </div>
                <center>
                    <h1 className='font-semibold hidde lg:flex items-center justify-center text-slate-400'>Mualliflik huquqi © 2021 Barcha huquqlar himoyalangan | Ushbu shablon Abdumajidov Ismoil tomonidan yaratilgan.</h1>
                </center>
            </div>
        </div>
    </>
  )
}

export default Footer