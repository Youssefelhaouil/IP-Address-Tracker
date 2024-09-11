import { IoIosArrowForward } from "react-icons/io";

function Search() {
    return (
        <>
            <div className="search w-full h-[300px]  flex flex-col justify-start items-center pt-8 gap-6">
                <h1 className='text-white text-[35px] text-center  '>IP Address Tracker</h1>
                <div className='flex items-center'>
                    <input
                        type="text"
                        placeholder="Search for any IP Address or Domain"

                        className='h-[48px] w-[450px] md:w-[290px] rounded-ss-xl rounded-es-xl px-4 text-base ' />
                    <div className="cursor-pointer bg-very-dark-gray hover:bg-dark-gray h-[48px] w-[50px] flex justify-center items-center rounded-se-xl rounded-ee-xl">
                        <IoIosArrowForward className=" text-white text-xl font-bold " />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Search
