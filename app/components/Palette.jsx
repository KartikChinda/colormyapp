import React, { useState } from 'react'

const Palette = ({ colone, coltwo, colthree, colfour }) => {

    const [isAlert, setIsAlert] = useState(true);

    const handleCopy = (e) => {
        // this is another way of doing it if e.target.value
        // console.log(e.target.getAttribute("value"));
        // console.log(e);

        navigator.clipboard.writeText(e.target.value)
    }

    return (
        <>
            <div className='w-[190px] md:w-[250px] border-2 border-black text-center flex flex-col rounded-t-xl rounded-b-xl '>
                <div className="h-[50px] w-full flex justify-center items-center md:text-transparent hover:text-black rounded-t-xl font-bold font-heading group" style={{ backgroundColor: colone }}>
                    <button onClick={handleCopy} value={colone} className='bg-[#ffc700] z-20 hidden group-hover:block group-hover:border-2 group-hover:border-black rounded-lg px-1'>{colone}
                    </button>
                </div>
                <div className="h-[50px] w-full flex justify-center items-center md:text-transparent hover:text-black font-bold font-heading group" style={{ backgroundColor: coltwo }}>
                    <button onClick={handleCopy} value={coltwo} className='bg-[#ffc700] z-20 hidden group-hover:block group-hover:border-2 group-hover:border-black rounded-lg px-1'>{coltwo}
                    </button>
                </div>
                <div className="h-[50px] w-full flex justify-center items-center md:text-transparent hover:text-black font-bold font-heading group" style={{ backgroundColor: colthree }}>
                    <button onClick={handleCopy} value={colthree} className='bg-[#ffc700] z-20 hidden group-hover:block group-hover:border-2 group-hover:border-black rounded-lg px-1'>{colthree}
                    </button>
                </div>
                <div className="h-[50px] w-full flex justify-center items-center md:text-transparent hover:text-black font-bold font-heading group" style={{ backgroundColor: colfour }}>
                    <button onClick={handleCopy} value={colfour} className='bg-[#ffc700] z-20 hidden group-hover:block group-hover:border-2 group-hover:border-black rounded-lg px-1'>{colfour}
                    </button>
                </div>

                <div className='rounded-b-xl flex justify-center items-center p-2 border-t-2 border-black'>
                    Preview
                </div>

            </div>
        </>
    )
}

export default Palette