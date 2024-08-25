"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation"






const Herosection = () => {
    return (
        <main className="grid grid-cols-1 sm:grid-cols-12  text-white p-4 lg:p-8">
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center lg:items-start items-center text-center lg:text-left sm:text-left">
                <h1 className="text-white font-extrabold text-3xl lg:text-6xl mb-4 lg:mb-6">
                    <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400  via-pink-400 to-purple-500">
                        Hello, I&#39;m {''}

                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Sakthi Vignesh',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Front-End Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}

                        repeat={Infinity}
                    />

                </h1>
                <p className="text-lg lg:text-xl leading-relaxed">
                    A Frontend Developer specializing in Angular, React, and Next.js. I
                    focus on creating responsive, user-friendly web applications using
                    tools like Bootstrap, Tailwind CSS, and TypeScript.
                </p>
                <div>
                    <button className="border-md rounded-full bg-[#897243] px-6 py-3  mt-2 mr-4 lg:mt-9 hover:bg-slate-200 hover:text-black w-full sm:w-fit "> Hire Me</button>
                    <a
                        href="/sakthivignesh.pdf"
                        download="sakthivignesh.pdf"
                        className="border-md rounded-full bg-transparent border border-white px-6 py-3 mt-2 mr-4 lg:mt-9 hover:bg-slate-200 hover:text-black w-full sm:w-fit"
                    >
                        Download CV
                    </a>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end mt-6 lg:mt-0">
                <div className="relative rounded-full bg-[#0c0c0c] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px]">
                    <Image
                        src="/images/5.png"
                        alt="hero-image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
            </div>
        </main>
    );
};

export default Herosection;
