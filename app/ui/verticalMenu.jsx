// components/VerticalMenu.js

import { HomeIcon, PhotoIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";



const VerticalMenu = () => {
    const menuItems = [
        { href: "/", title: "Inicio", icon: <HomeIcon className="h-4 w-4 mx-2" /> },
        { href: "/about", title: "Acerca", icon: <PhotoIcon className="h-4 w-4 mx-2" /> },
        { href: "/contact", title: "Contacto", icon: <UserCircleIcon className="h-4 w-4 mx-2" /> },
    ];

    return (
        <aside className="w-full pt-3">
            <nav>
                <ul className="flex flex-grow ">
                    {menuItems.map(({ href, title, icon }, index) => (
                        <li className={`m-1 mx-3 ${index === menuItems.length - 1 ? 'ml-auto ' : ''}`} key={title}>
                            <Link href={href}>
                                <div className={`inline-flex items-center w-full p-2  text-gray-800 rounded hover:bg-red-600 cursor-pointer`}>
                                    {icon} {title}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default VerticalMenu;
