import React from 'react'

const ColorForm = () => {
    return (

        <>
            <section className='flex flex-col justify-start items-start pt-8 border-2 border-black rounded-md'>
                <div className='hover:skew-y-1 hover:translate-x-2 font-heading pb-10 mx-auto'>
                    <span className='text-md xl:text-xl font-semibold border-2 rounded-2xl p-2 border-black hover:font-bold hover:shadow-xl shadow-lg '>Create your own palette</span>
                </div>
                <div className='w-[90%] ml-1'>
                    <form action="" className='flex flex-col items-start justify-start gap-2 mb-10 ' >
                        <div className='flex xl:text-lg font-heading flex-col justify-start items-start gap-1 border-2 px-2 ml-2 text-sm rounded-xl py-1 w-full hover:-translate-x-2 hover:-skew-y-1 hover:shadow-md'>
                            <label>
                                Primary color
                            </label>
                            <div>
                                <input placeholder='Enter color here' className=''>

                                </input>
                            </div>
                        </div>

                        {/* color 2 */}
                        <div className='flex xl:text-lg font-heading flex-col justify-start items-start gap-1 border-2 px-2 ml-2 text-sm rounded-xl py-1 w-full hover:-translate-x-2 hover:-skew-y-1 hover:shadow-md'>
                            <label>
                                Secondary color
                            </label>
                            <div>
                                <input placeholder='Enter color here' className=''>

                                </input>
                            </div>
                        </div>

                        {/* Color 3 */}
                        <div className='flex xl:text-lg font-heading flex-col justify-start items-start gap-1 border-2 px-2 ml-2 text-sm rounded-xl py-1 w-full hover:-translate-x-2 hover:-skew-y-1 hover:shadow-md'>
                            <label>
                                Tertiary color
                            </label>
                            <div>
                                <input placeholder='Enter color here' className=''>

                                </input>
                            </div>
                        </div>

                        {/* color 4 */}
                        <div className='flex xl:text-lg font-heading flex-col justify-start items-start gap-1 border-2 px-2 ml-2 text-sm rounded-xl py-1 w-full hover:-translate-x-2 hover:-skew-y-1 hover:shadow-md'>
                            <label>
                                Quarternery color
                            </label>
                            <div>
                                <input placeholder='Enter color here' className=''>

                                </input>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center mx-auto gap-2 mt-5'>
                            <button className='text-md xl:text-xl font-semibold border-2 rounded-2xl p-2 border-black hover:font-bold hover:shadow-xl shadow-lg font-heading px-4 hover:text-[21px] bg-[#ffc700]'>Showcase </button>
                            <button className='text-md xl:text-xl font-semibold border-2 rounded-2xl p-2 border-black hover:font-bold hover:shadow-md font-heading px-4 hover:text-[18px]'> Clear </button>
                        </div>


                    </form>
                </div>





            </section>
        </>
    )
}

export default ColorForm