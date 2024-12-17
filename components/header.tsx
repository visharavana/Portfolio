'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">Vishal</div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#about" className="hover:text-blue-500">About</a>
                        <a href="#skills" className="hover:text-blue-500">Skills</a>
                        <a href="#projects" className="hover:text-blue-500">Projects</a>
                        <a href="#opensource" className="hover:text-blue-500">Open Source</a>
                        <a href="#contact" className="hover:text-blue-500">Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="mt-4 md:hidden">
                        <a href="#about" className="block py-2 hover:text-blue-500">About</a>
                        <a href="#skills" className="block py-2 hover:text-blue-500">Skills</a>
                        <a href="#projects" className="block py-2 hover:text-blue-500">Projects</a>
                        <a href="#opensource" className="block py-2 hover:text-blue-500">Open Source</a>
                        <a href="#contact" className="block py-2 hover:text-blue-500">Contact</a>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header

