import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu5Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg"

function Menu() {


    //Open_Sidebar_Menu
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(true)

    //Open_Sidebar_Menu
    const handleSideMenu = () => {
        setIsOpenSideMenu(!isOpenSideMenu)
    }

    return (
        <aside className="w-64 fixed " aria-label="Sidebar">

            <div className="overflow-y-auto h-screen py-4 px-3  rounded border-r hidden lg:block">
                <ul className="space-y-2">
                    <li>
                        <Link to={"/dashboard/"} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3">Slider</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/dashboard/slideradmin"} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap">Etkinlikler</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div onClick={handleSideMenu} className='block lg:hidden w-64 '>
                    <ul className='hover:text-indigo-300 p-3'>
                        <li className='cursor-pointer'><CgMenuGridR size={35} /></li>
                    </ul>
                </div>
                <div className={!isOpenSideMenu ? 'block lg:hidden fixed top-0 right-0 w-[60%] h-full bg-gray-900  duration-1000 z-50 ' : "fixed h-full w-[60%] top-0 right-[-100%] duration-1000"}>
                    <ul className='mt-24 uppercase text-center font-bold cursor-pointer flex flex-col justify-center items-center z-50'>
                        <li className='p-4'>Home</li>
                        <li className='p-4'>Profile</li>
                        <li className='p-4'>Setting</li>
                        <li className='p-4'><FiLogOut onClick={handleSideMenu} size={30} /></li>
                    </ul>
                </div>
            </div>



        </aside>
    )
}

export default Menu