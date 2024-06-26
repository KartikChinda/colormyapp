'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";


const ColorForm = ({ setFormSubmitted }) => {

    const router = useRouter();


    const [palette, setpalette] = useState({
        colone: "",
        coltwo: "",
        colthree: "",
        colfour: "",
    })

    const handleClear = (e) => {
        e.preventDefault();
        setpalette({
            colone: "",
            coltwo: "",
            colthree: "",
            colfour: "",
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = palette;
        setpalette({
            colone: "",
            coltwo: "",
            colthree: "",
            colfour: "",
        })
        try {

            const response = await fetch("/api/new", {
                method: "POST",
                body: JSON.stringify({
                    cone: data.colone,
                    ctwo: data.coltwo,
                    cthree: data.colthree,
                    cfour: data.colfour,
                })
            });

            if (response.ok) {
                setFormSubmitted(prev => !prev)
            }



        } catch (error) {
            console.log(error);
        }

    }



    return (

        <>
            <section className='flex flex-col justify-start items-start pt-8 border-2 border-black rounded-md'>
                <div className='hover:skew-y-1 hover:translate-x-2 font-heading pb-10 mx-auto'>
                    <span className='text-md xl:text-xl font-semibold border-2 rounded-2xl p-2 border-black hover:font-bold hover:shadow-xl shadow-lg '>Create your own palette</span>
                </div>
                <div className='w-[90%] ml-1'>
                    <div className="font-heading text-left pl-5 pb-2">Add in the hex values of the colors: </div>
                    <form onSubmit={handleSubmit} className='flex flex-col items-start justify-start gap-3 mb-10 ' >
                        <div className='flex xl:text-lg font-heading flex-col justify-start items-start gap-1 border-2 px-2 ml-2 text-sm rounded-xl py-1 w-full hover:-translate-x-2 hover:-skew-y-1 hover:shadow-md'>
                            <label htmlFor="primarycol" className='pl-2'>
                                Primary color
                            </label>

                            <input onChange={(e) => setpalette({ ...palette, colone: e.target.value })} value={palette.colone} placeholder='Example: #5552ff' className='p-2 -mt-1' id="primarycol" >

                            </input>

                        </div>

                        {/* color 2 */}
                        <div className='flex xl:text-lg font-heading flex-col justify-start items-start gap-1 border-2 px-2 ml-2 text-sm rounded-xl py-1 w-full hover:-translate-x-2 hover:-skew-y-1 hover:shadow-md'>
                            <label htmlFor="seccol" className='pl-2'>
                                Secondary color
                            </label>
                            <div>
                                <input onChange={(e) => setpalette({ ...palette, coltwo: e.target.value })} value={palette.coltwo} id="seccol" placeholder='Example: #ffffff' className='p-2 -mt-1'>

                                </input>
                            </div>
                        </div>

                        {/* Color 3 */}
                        <div className='flex xl:text-lg font-heading flex-col justify-start items-start gap-1 border-2 px-2 ml-2 text-sm rounded-xl py-1 w-full hover:-translate-x-2 hover:-skew-y-1 hover:shadow-md'>
                            <label htmlFor="tertcol" className='pl-2'>
                                Tertiary color
                            </label>
                            <div>
                                <input onChange={(e) => setpalette({ ...palette, colthree: e.target.value })} value={palette.colthree} id="tertcol" placeholder='Example: #e6e5db ' className='p-2 -mt-1'>

                                </input>
                            </div>
                        </div>

                        {/* color 4 */}
                        <div className='flex xl:text-lg font-heading flex-col justify-start items-start gap-1 border-2 px-2 ml-2 text-sm rounded-xl py-1 w-full hover:-translate-x-2 hover:-skew-y-1 hover:shadow-md'>
                            <label htmlFor="quartcol" className='pl-2'>
                                Quarternery color
                            </label>
                            <div>
                                <input onChange={(e) => setpalette({ ...palette, colfour: e.target.value })} value={palette.colfour} id="quartcol" placeholder='Exapmle: #ffc700' className='p-2 -mt-1'>

                                </input>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center mx-auto gap-2 mt-5'>
                            <button className='text-md xl:text-xl font-semibold border-2 rounded-2xl p-2 border-black hover:font-bold hover:shadow-xl shadow-lg font-heading px-4 hover:text-[21px] bg-[#ffc700]' type='submit' >Showcase </button>
                            <button className='text-md xl:text-xl font-semibold border-2 rounded-2xl p-2 border-black  hover:shadow-md font-heading px-4 hover:text-[14px]' onClick={(e => handleClear(e))}> Clear </button>
                        </div>


                    </form>
                </div>





            </section>
        </>
    )
}

export default ColorForm