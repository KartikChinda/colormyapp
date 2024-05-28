"use client";
import React, { useState } from 'react';
import Site from './Site';
import { FaHeart } from "react-icons/fa";


const Palette = ({ colone, coltwo, colthree, colfour, likes, id, setbuttonClicked }) => {

    const [showModal, setshowModal] = useState(false);




    const handleCopy = (e) => {
        // this is another way of doing it if e.target.value
        // console.log(e.target.getAttribute("value"));
        // console.log(e);

        navigator.clipboard.writeText(e.target.value)
    }

    const handleUpdate = async () => {
        try {
            console.log("Hitting the backend: ", id);
            const response = await fetch(`/api/palette/${id}`, { method: "PUT" })

            if (response.ok) {
                setbuttonClicked(prev => !prev)
            }


        } catch (error) {
            console.log("This is a frontend error here in the updating");
            console.log(error);
        }
    }



    return (
        <>
            <div className='w-[190px] md:w-[200px] border-2 border-black text-center flex flex-col rounded-t-xl rounded-b-xl '>
                <div className="h-[80px] w-full flex justify-center items-center md:text-transparent hover:text-black rounded-t-xl font-bold font-heading group" style={{ backgroundColor: colone }}>
                    <button onClick={handleCopy} value={colone} className='bg-[#ffc700] z-20 hidden group-hover:block group-hover:border-2 group-hover:border-black rounded-lg px-1'>{colone}
                    </button>
                </div>
                <div className="h-[60px] w-full flex justify-center items-center md:text-transparent hover:text-black font-bold font-heading group" style={{ backgroundColor: coltwo }}>
                    <button onClick={handleCopy} value={coltwo} className='bg-[#ffc700] z-20 hidden group-hover:block group-hover:border-2 group-hover:border-black rounded-lg px-1'>{coltwo}
                    </button>
                </div>
                <div className="h-[40px] w-full flex justify-center items-center md:text-transparent hover:text-black font-bold font-heading group" style={{ backgroundColor: colthree }}>
                    <button onClick={handleCopy} value={colthree} className='bg-[#ffc700] z-20 hidden group-hover:block group-hover:border-2 group-hover:border-black rounded-lg px-1'>{colthree}
                    </button>
                </div>
                <div className="h-[30px] w-full flex justify-center items-center md:text-transparent hover:text-black font-bold font-heading group" style={{ backgroundColor: colfour }}>
                    <button onClick={handleCopy} value={colfour} className='bg-[#ffc700] z-20 hidden group-hover:block group-hover:border-2 group-hover:border-black rounded-lg px-1'>{colfour}
                    </button>
                </div>

                <div className='rounded-b-xl flex justify-between items-center p-2 border-t-2 border-black font-heading font-bold text-lg '>
                    <button onClick={() => setshowModal(true)} className='text-sm xl:text-base font-semibold border-2 rounded-2xl p-2 border-black hover:font-bold hover:shadow-xl shadow-lg font-heading px-4 hover:text-[18px] bg-[#ffc700]' >Preview </button>
                    {showModal && <Site closeSite={() => setshowModal(false)} cone={colone} ctwo={coltwo} cthree={colthree} cfour={colfour} />}
                    <button onClick={handleUpdate} className='text-black flex justify-center items-center gap-1'>{likes}<FaHeart /></button>

                </div>

            </div>
        </>
    )
}

export default Palette