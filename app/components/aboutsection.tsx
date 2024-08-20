"use client"
import React, { useState, useTransition } from "react"
import Image from "next/image"
import Tabbutton from "./tabbutton"
import { title } from "process"


const Aboutsection = () => {
    const TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h4 className="text-lg font-medium">Libraries & Frameworks</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Reactjs</li>
                            <li>Nextjs</li>
                            <li>Angular</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-medium">CSS Frameworks</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Tailwind</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-medium">Languages</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Typescript</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "Education",
            id: "education",
            content: (
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Education</h3>
                    <div className="space-y-2">
                        <h4 className="text-lg font-medium">Bachelor of Technology (B-Tech)</h4>
                        <p className="text-base">Major: Information Technology</p>
                        <p className="text-base">Institution: Nandha Engineering College</p>
                        <p className="text-base">Graduated: 2024</p>
                    </div>
                </div>
            ),

        }, {
            title: "Experience",
            id: "experience",
            content: (
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Intern, Zauto</h3>
                    <p className="text-base">Duration: 6 months</p>
                    <p className="text-base">
                        • Worked on the AI chatbot product, contributing to the development and integration of intelligent chat functionalities to enhance user interaction.
                    </p>
                </div>
            ),
        }





    ]

    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('skills');

    function handlechange(id: string) {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className=" text-white bg-black">
            <div className="md:grid md:grid-cols-2 gap-8  items-center py-8  px-4  xl:gap-16 sm:py-16 ">
                <Image src="/images/about-image.png" alt="about" width={500} height={500} />
                <div className="mt-8 sm:py-2 md:mt-0  text-left  flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white ">About Me</h2>
                    <p className=" text-base lg:text-lg mt-1">I'm a Front-End Developer with experience in creating dynamic and user-friendly web applications. I have also worked on no-code front-end development, enabling rapid prototyping and efficient solutions. </p>
                    <div className="flex flex-row mt-8 space-x-4">
                        <Tabbutton selectTab={() => handlechange("skills")} active={tab === "skills"} >Skills</Tabbutton>

                        <Tabbutton selectTab={() => handlechange("education")} active={tab === "education"} >Education</Tabbutton>


                        <Tabbutton selectTab={() => handlechange("experience")} active={tab === "experience"} >Experience</Tabbutton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>


                </div>
            </div>
        </section >

    )
}
export default Aboutsection