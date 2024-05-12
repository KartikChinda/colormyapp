'use client';

import { useState, useEffect } from "react";
import Palette from "./Palette";

const HomePage = () => {
    const [palettes, setPalettes] = useState([]);

    useEffect(() => {
        const fetchPalettes = async () => {
            const response = await fetch("/api/palette");
            const data = await response.json();

            setPalettes(data);
        }

        fetchPalettes();

    }, [])



    return (
        <>

            <section className='flex flex-col justify-start items-start pt-8 border-2 border-black rounded-md'>
                <div className='hover:skew-y-1 hover:translate-x-2 font-heading pb-10 mx-auto'>
                    <span className='text-2xl font-black border-2 rounded-2xl p-2 border-black hover:font-bold hover:shadow-xl shadow-lg '>Color Palettes</span>
                </div>
                <div className='p-2 flex flex-row flex-wrap gap-2 justify-center md:justify-around'>
                    {palettes.map((p) => {
                        return (<>
                            <Palette colone={p.colone} coltwo={p.coltwo} colthree={p.colthree} colfour={p.colfour} />
                        </>)
                    })}

                </div>

            </section>
        </>
    )
}

export default HomePage