import { RiMenu3Line, RiMoonFill } from "@remixicon/react";
import { useState } from "react";

function Navbar() {

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

            <ul className="gap-8  hidden md:flex">
                {
                    navs.map((item) => (
                        <li key={Math.random()}><a className="font-jetbrains text-sm font-light" href="item.href">{item.label}</a></li>
                    ))
                }

            </ul>
            <div className="flex gap-6">
                <li className="list-none"><RiMoonFill size={24} color="#e5e5e5" /></li>
                <ul className="md:hidden list-none cursor-pointer relative">
                    <RiMenu3Line onClick={() => setIsOpen(!isOpen)} />
                    <ul className={`absolute border p-4 right-2`}>
                        {
                            navs.map((item) => (
                                <li key={Math.random()}><a className="font-jetbrains text-sm font-light" href="item.href">{item.label}</a></li>
                            ))
                        }
                    </ul>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar