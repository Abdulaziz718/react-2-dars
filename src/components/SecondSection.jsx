import React from 'react'

const SecondSection = () => {
  return (
    <>
        <div className="flex flex-col lg:flex-row justify-between items-center px-8 md:px-10 lg:px-[110px] mt-[100px] ">
            <div className='flex flex-col gap-4'>
                <h1 className='text-4xl font-bold'>Domen nomingizni qidiring</h1>
                <p className='text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
            <div className='radius bg-purple-600 p-20'>
                <div className='flex'>
                    <input type="text" className='py-3 outline-none left-radius w-[400px] px-3 text-black placeholder:text-black' placeholder='Domenni kiriting'/>
                    <select name=".com" id="" className='outline-none'>
                        <option >.com</option>
                        <option value=".uz">.uz</option>
                        <option value=".biz">.biz</option>
                    </select>
                    <button className='px-14 bg-red-400 text-white radius-right'>Button</button>
                </div>
                <div>
                    <button>search</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SecondSection