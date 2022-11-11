import { useState } from 'react'
import { Link } from 'react-router-dom';
import { RiMenu5Fill } from "react-icons/ri";
import afyol from "../assets/afyol.png";

 
function Navbar() {
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(true)

    //Open_Sidebar_Menu
    const handleSideMenu = () => {
        setIsOpenSideMenu(!isOpenSideMenu)
    }
    return (
        <nav className=" sticky top-0 z-30  border-b bg-black" >
            <div className='h-24 font-display4 text-lg max-w-6xl mx-auto flex items-center justify-between px-2 '>
                <div>
                    <img className='w-24 cursor-pointer hover:opacity-80' src={afyol} />
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex items-center space-x-6  '>
                        <Link to={"/"}><li className='cursor-pointer hover:text-sky-400 duration-300 transform hover:scale-105 transition ease-linear '>Anasayfa</li></Link>
                        <Link to={"about"}><li className='cursor-pointer hover:text-sky-400 duration-300 transform hover:scale-105 transition ease-linear '>Hakkımızda</li></Link>
                        <Link to={"gallery"}><li className='cursor-pointer hover:text-sky-400 duration-300 transform hover:scale-105 transition ease-linear ' >Galeri</li></Link>
                        <Link to={"members"}> <li className='cursor-pointer hover:text-sky-400 duration-300 transform hover:scale-105 transition ease-linear '>Üyelerimiz</li></Link>                        
                        <Link to={"contact"}><li className='cursor-pointer hover:text-sky-400 duration-300 transform hover:scale-105 transition ease-linear '>İletişim</li></Link>
                        <Link to={"dashboard"}><li className='cursor-pointer hover:text-sky-400 duration-300 transform hover:scale-105 transition ease-linear '>dashboard</li></Link>
                    </ul>
                </div>
                <div onClick={handleSideMenu} className='block lg:hidden'>
                    <ul className='hover:text-indigo-300'>
                        <li className='p-4'><RiMenu5Fill size={35}/></li>
                    </ul>
                </div>
                <div className={!isOpenSideMenu ? 'block ld:hidden fixed top-0 left-0 w-[60%] h-full bg-indigo-100  duration-1000  ' : "fixed h-full w-[60%] top-0 left-[-100%] duration-1000  "}>
                    <ul className='mt-10 uppercase text-center font-bold cursor-pointer  '>
                        <li className='p-4'>Home</li>
                        <li className='p-4'>Profile</li>
                        <li className='p-4'>Setting</li>
                        <li className='p-4'>Logout</li>
                    </ul>                                 
                </div>
            </div>



        </nav>
    )
}

export default Navbar