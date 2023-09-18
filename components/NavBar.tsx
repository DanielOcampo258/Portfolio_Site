"use client"

import Link from "next/link"
import { useState } from "react"
import { BiMenuAltRight } from 'react-icons/bi'
import { IoIosClose } from 'react-icons/io'
const NavBar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const navElements = [

        { 'link': '#about', 'label': 'About' },
        { 'link': '#projects', 'label': 'Projects' },
        { 'link': '#contact', 'label': 'Contact' }

    ]

    return (
        <nav className="sticky top-0 grid grid-cols-12 px-10 py-4">
            <Link href={'#top'} onClick={() => setMenuOpen(false)} className="text-xl col-span-11 md:col-span-9">
                <div className="relative">
                    <span className="absolute">D</span>
                    <span className="absolute top-4 left-5">O</span>
                </div>
            </Link>

            {/* MOBILE NAVIGATION MENU START */}

            <button id='hb-menu-btn' className="text-3xl col-span-1 block md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
                <BiMenuAltRight />
            </button>
            <div id='mobile-nav-container' className={`w-72 h-screen fixed top-0 right-0 transition-all bg-white ${isMenuOpen ? 'translate-x-0' : 'translate-x-72'}`}>

                <div id="mobile-nav-links" className="px-4 py-2 flex justify-between items-start">

                    <ul className="flex flex-col justify-around text-black">
                        {
                            navElements.map((element) => {
                                return <li key={element.link} onClick={() => setMenuOpen(false)}><Link href={element.link}>{element.label}</Link></li>
                            })
                        }
                    </ul>

                    <button className="text-black text-3xl" onClick={() => setMenuOpen(!isMenuOpen)}>
                        <IoIosClose />
                    </button>
                </div>
            </div>

            {/* MOBILE NAVIGATION MENU END */}


            {/* DESKTOP NAVIGATION MENU START*/}

            <ul className="hidden md:flex md:justify-around md:col-span-3">

                {
                    navElements.map((element) => {
                        return <li key={element.link}><Link href={element.link}>{element.label}</Link></li>
                    })
                }

            </ul>

            {/* DESKTOP NAVIGATION MENU END*/}
        </nav>
    )
}

export default NavBar