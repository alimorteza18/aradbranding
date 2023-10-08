"use client"
import { useState } from "react"
import Image from "next/image";
import { MdDashboardCustomize, MdSettings } from "react-icons/md"
import { CgList } from "react-icons/cg"
import { FaUsers } from "react-icons/fa"
import { IoIosLogIn } from "react-icons/io"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ children }: any) => {

    const [showSideBar, setShowSideBAr] = useState<boolean>(false);
    const [dropDown, setDropdown] = useState<boolean>(false);
    const [showUser, setShowUser] = useState<boolean>(false);
    const pathName = usePathname();
    const openSideBar = () => {
        setShowSideBAr(!showSideBar);
    };

    const openDropDown = () => {
        setDropdown(!dropDown);
    };

    const openUser = () => {
        setShowUser(!showUser);
    };

    return (
        <div>
            <nav className={`fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${pathName === "/login" ? `hidden` : ``}`}>
                <div className="px-3 py-3 lg:px-5 lg:pr-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-end">
                            <button onClick={openSideBar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://aradbranding.com" className="flex ">
                                <Image src="/images/arad.svg" width={35} height={35} className="h-8 ml-3" alt="Arad Branfing Logo" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Arad Branding</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center mr-3">
                                <div>
                                    <button onClick={openUser} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <Image className="w-8 h-8 rounded-full" src="/images/avatar.png" width={100} height={100} alt="Avatar" />
                                    </button>
                                </div>
                                {/* <div className={`z-50 ${showUser ? `` : `hidden`} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown-user">
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                                            Ali Morteza
                                        </p>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                            alimurtaza7x@gmail.com
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className={`${pathName === "/login" ? `hidden` : ``} fixed top-0 right-0 z-40 w-64 h-screen pt-20 transition-transform ${showSideBar ? `translate-x-0` : `translate-x-full`} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href='/' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdDashboardCustomize className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="mr-3">داشبورد</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdSettings className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="flex-1 mr-3 whitespace-nowrap">تنظیمات</span>
                            </a>
                        </li>
                        <li>
                            <button onClick={openDropDown} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <CgList className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="flex-1 mr-3 text-right whitespace-nowrap">بلاگ</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="dropdown-example" className={`${dropDown ? `` : `hidden`} py-2 space-y-2`}>
                                <li>
                                    <Link href="/blogs" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">لیست بلاگ ها</Link>
                                </li>
                                <li>
                                    <Link href="/blogs/create-blog" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">افزودن بلاگ</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FaUsers className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="flex-1 mr-3 whitespace-nowrap">کاربران</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoIosLogIn className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="flex-1 mr-3 whitespace-nowrap">ورود</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>

            <div className={`${pathName === "/login" ? `` : `sm:mr-64 p-4` }`}>
                <div className={`${pathName === "/login" ? `mt-0` : `mt-14 p-4 dark:border-gray-700`}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;