import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className='flex items-center justify-start'>
                <div className='flex flex-row flex-grow bg-[#e6e5db] hover:bg-[#e3e2d5] md:py-2 md:px-1 border-b-4 border-black'>
                    <div className='flex flex-row text-xl bg-[#e6e5db] hover:bg-[#e3e2d5] border-2 items-center border-black px-1'>
                        <div className=' border-2 bg-[#ffc700] hover:bg-[#ffc156]  font-heading md:ml-2 py-2 px-2 border-black font-bold text-2xl'>
                            🡠
                        </div>
                        <div className='hidden md:block border-2 font-heading py-2 px-2 bg-[#ffc700] hover:bg-[#ffc156] border-black font-bold text-2xl'>
                            🡢
                        </div>
                        <div className=' py-2 px-2 border-black font-heading bg-[#ffc700] hover:bg-[#ffc156] border-2 md:mr-2 font-extrabold text-2xl'>
                            ⟳
                        </div>
                    </div>
                    <div className='flex flex-row md:flex-grow justify-between items-center '>
                        <div className='bg-[#ffc700] border-2 hover:bg-[#ffc156] border-black px-2 md:px-5 mx-3 my-2 py-2 md:text-4xl' >
                            <span className='text-[#000] font-heading'>https://colormyapp.com</span>
                        </div>
                        <div className='border-2 hover:bg-[#ffc156] hidden md:block bg-[#ffc700] py-2 px-2 font-heading border-black  md:mr-2 font-bold text-2xl'>
                            X
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar