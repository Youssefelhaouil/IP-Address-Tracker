import React from 'react'

function Result() {
    return (
        <>
            <div className="relative h-[140px] w-full  rounded-xl px-[100px] grid place-items-center mt-[-110px] md:mt-[-120px]  z-[10000]  ">
                <div className="relative bg-white w-full h-[160px] rounded-xl px-10 md:px-2 md:py-4 md:text-center flex items-start pt-8 md:pt-0 md:flex-col md:justify-center md:items-center md:gap-2 divide-x-2 md:divide-x-0 shadow-xl md:h-fit">
                    <div className='w-1/4 px-4 md:w-full md:px-0 flex flex-col   gap-2 '>
                        <h1 className='text-gray-500 font-semibold text-sm md:text-[12px]'>IP ADDRESS</h1>
                        <p className='text-black font-semibold text-2xl '>192.143.156.101</p>
                    </div>
                    <div className='w-1/4 md:w-full px-8 md:px-0 flex flex-col gap-2 '>
                        <h1 className='text-gray-500 font-semibold text-sm md:text-[12px]'>LOCATION</h1>
                        <p className='text-black font-semibold text-2xl '>BROOKLYN, NY 10001</p>
                    </div>
                    <div className='w-1/4 md:w-full px-8 md:px-0 flex flex-col gap-2 '>
                        <h1 className='text-gray-500 font-semibold text-sm md:text-[12px]'>TIMEZONE</h1>
                        <p className='text-black font-semibold text-2xl '>UTC -5:00</p>
                    </div>
                    <div className='w-1/4 md:w-full px-8 md:px-0 flex flex-col gap-2 '>
                        <h1 className='text-gray-500 font-semibold text-sm md:text-[12px]'>ISP</h1>
                        <p className='text-black font-semibold text-2xl  '>SpaceX <br className='md:hidden'/>Starlink</p>
                    </div>
                    

                </div>

            </div>

        </>
    )
}

export default Result
