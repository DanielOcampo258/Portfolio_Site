"use client"

import Link from "next/link"
import { useState } from "react"

const NavBar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 md:grid md:grid-cols-12 px-10 py-4">
            <Link href={'#top'} className="text-xl w-fit col-span-9">
                <div className="relative">
                    <span className="absolute">D</span>
                    <span className="absolute top-4 left-5">O</span>
                </div>
            </Link>

            <ul className="flex justify-around col-span-3">
                <li><Link href={'#about'}>About</Link></li>
                <li><Link href={'#projects'}>Projects</Link></li>
                <li><Link href={'#contact'}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar