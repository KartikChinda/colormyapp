'use client';

import { useState, useEffect } from "react";
import Palette from "./Palette";

const HomePage = ({ formSubmitted }) => {
    const [palettes, setPalettes] = useState([]);
    const [buttonClicked, setbuttonClicked] = useState(false)


    useEffect(() => {
        const fetchPalettes = async () => {
            const response = await fetch("/api/palette");
            const data = await response.json();
            data.sort((a, b) => b.likes - a.likes)
            setPalettes(data);
        }

        fetchPalettes();

    }, [buttonClicked, formSubmitted])


    return (
        <>

            <section className='flex flex-col justify-start items-start pt-8 border-2 border-black rounded-md'>
                <div className='hover:skew-y-1 hover:translate-x-2 font-heading pb-10 mx-auto'>
                    <span className='text-2xl font-black border-2 rounded-2xl p-2 border-black hover:font-bold hover:shadow-xl shadow-lg '>Color Palettes</span>
                </div>
                <div className='p-2 flex flex-row flex-wrap gap-2 justify-center md:justify-start'>
                    {palettes.map((p) => {
                        return (<div key={p._id}>
                            <Palette colone={p.colone} coltwo={p.coltwo} colthree={p.colthree} colfour={p.colfour} likes={p.likes} id={p._id} setbuttonClicked={setbuttonClicked} />
                        </div>)
                    })}

                </div>

            </section>
        </>
    )
}

export default HomePage