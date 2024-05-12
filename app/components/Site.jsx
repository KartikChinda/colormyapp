import React from 'react'



const Site = ({ closeSite, cone, ctwo, cthree, cfour }) => {
    return (
        <div className='fixed top-2 md:top-0 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center font-sans'>
            <div className='flex relative top-14 md:top-0 flex-col gap-3 w-[100%] m-5 bg-[#ffffff] p-2'>
                <button className=' text-right p-2 text-5xl font-sans border-2 border-black' onClick={closeSite}>X</button>
                <div className='border-2 border-black' style={{ backgroundColor: cone }}>
                    <nav className=' h-[34px] md:h-[80px]' style={{ backgroundColor: ctwo }}>
                        <div className='flex flex-row justify-around items-center font-sans md:text-3xl md:pt-5' style={{ color: cthree }}>
                            Welcome to your website
                        </div>
                    </nav>
                    <div className='flex flex-col md:flex-row justify-start items-center gap-3 md:justify-between pt-6 pb-3'>

                        <div className='md:w-3/5 lg:w-4/6 md:pl-5 '>
                            <div className='flex flex-col justify-start items-start px-5'>
                                <p className='text-3xl mx-auto md:mx-0 md:text-5xl mb-4 ' style={{ color: cthree }}>Heading goes here</p>
                                <p className='text-left' style={{ color: cthree }}>Will this really be a mockup page without some lorem ipsum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, ipsum. are you still reading this? You were supposed to check the design layouts, not spend time f*cking around.  </p>
                            </div>
                        </div>
                        <div className='md:w-2/5 lg:w-2/6 md:pr-5'>
                            <form className='flex flex-col justify-start gap-1 md:gap-2 m-2 rounded-lg pt-2 pb-2 px-4 border-2' style={{ backgroundColor: cfour, border: `2px solid ${ctwo}` }}>
                                <p className='text-3xl mx-auto pb-3 font-playfair' style={{ color: cthree }}>This is a form</p>

                                <input type="text" placeholder='Placeholder input' className='p-1 md:p-4 m-1 rounded-xl outline-1 ' style={{ border: `2px solid ${ctwo}` }} />
                                <input type="text" placeholder='Placeholder input' className='p-1 md:p-4 m-1 rounded-xl outline-1 ' style={{ border: `2px solid ${ctwo}` }} />
                                <input type="text" placeholder='Placeholder input' className='p-1 md:p-4 m-1 rounded-xl outline-1 ' style={{ border: `2px solid ${ctwo}` }} />


                                <div className='rounded-xl p-2 m-1 border-2  w-4/5 mx-auto mt-3 hover:cursor-pointer' style={{ backgroundColor: cthree, color: cfour, border: `2px solid ${ctwo}` }} >Submit</div>
                                <div className='rounded-xl p-2 m-1 border-2 b w-4/5 mx-auto hover:cursor-pointer ' style={{ backgroundColor: cthree, color: cfour, border: `2px solid ${ctwo}` }} >Cancel</div>



                            </form>
                        </div>


                    </div>

                </div>
            </div>



        </div >
    )
}

export default Site