import { RiCloseLargeFill, RiMenu3Line, RiMoonFill } from "@remixicon/react";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const navs = [
        {
            label: 'Projects',
            href: '#projects'
        },
        {
            label: 'Tech Stacks',
            href: '#tack-stacks'
        },
        {
            label: 'About',
            href: '#about'
        }
    ]

    return (
        <nav className="font-jetbrains flex justify-between items-center py-8">
            <div className="logo text-xl font-jetBrains font-bold text-primary">rahul.dev</div>
            <div className="flex gap-6">
            <ul className="gap-8 mr-6 hidden md:flex">
                {
                    navs.map((item, idx) => (
                        <li key={idx}><a className="font-jetbrains text-sm font-light hover:text-[#008080]" href={item.href}>{item.label}</a></li>
                    ))
                }
            </ul>
                <div className="list-none"><RiMoonFill size={24} color="#e5e5e5" /></div>
                <div className="md:hidden list-none cursor-pointer relative">
                    {isOpen ? (
                        <RiCloseLargeFill onClick={() => setIsOpen(!isOpen)} />
                    ) : (
                        <RiMenu3Line onClick={() => setIsOpen(!isOpen)} />
                    )}
                    <ul className={`absolute p-4 w-max gap-2  top-8 right-2 ${isOpen ? 'flex' : 'hidden'} flex flex-col bg-[#292929]`}>
                        {
                            navs.map((item, idx) => (
                                <li className="bg-[#303030] py-1 px-6" key={idx}><a onClick={() => setIsOpen(!isOpen)} className="font-jetbrains text-sm font-light hover:text-[#008080]" href={item.href}>{item.label}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
