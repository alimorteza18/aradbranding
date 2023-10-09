'use client'

import { Modal } from '@/components';
import { useState } from 'react';

const Users = () => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleShowModal = () => {
        setShowModal(!showModal);
    };


    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                نام
                            </th>
                            <th scope="col" className="px-6 py-3">
                                نوع
                            </th>
                            <th scope="col" className="px-6 py-3">
                                وضعیت
                            </th>
                            <th scope="col" className="px-6 py-3">
                                حذف و ویرایش کاربر
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="https://wallpapers-clan.com/wp-content/uploads/2023/02/anime-boy-black-pfp-2.jpg" alt="image" />
                                <div className="pr-3">
                                    <div className="text-base font-semibold">علی مرتضی یلمازتکین</div>
                                    <div className="font-normal text-gray-500">alimurtaza7x@gmail.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                ادمین
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>

                                    <p className="mr-1">
                                        آنلاین
                                    </p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {/* Modal toggle  */}
                                <button data-modal-show="editUserModal" onClick={handleShowModal} type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                                    <a className="font-medium text-white">ویرایش </a>
                                </button>
                                <button type="button" className="mr-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                                    <a className="font-medium text-white">حذف</a>
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="https://wallpapers-clan.com/wp-content/uploads/2023/02/anime-boy-black-pfp-2.jpg" alt="image" />
                                <div className="pr-3">
                                    <div className="text-base font-semibold">علی مرتضی یلمازتکین</div>
                                    <div className="font-normal text-gray-500">alimurtaza7x@gmail.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                ادمین
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                                    <p className="mr-1">
                                        آنلاین
                                    </p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button data-modal-show="editUserModal" onClick={handleShowModal} type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                                    <a className="font-medium text-white">ویرایش </a>
                                </button>
                                <button type="button" className="mr-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                                    <a className="font-medium text-white">حذف</a>
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="https://wallpapers-clan.com/wp-content/uploads/2023/02/anime-boy-black-pfp-2.jpg" alt="image" />
                                <div className="pr-3">
                                    <div className="text-base font-semibold">علی مرتضی یلمازتکین</div>
                                    <div className="font-normal text-gray-500">alimurtaza7x@gmail.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                سوپر ادمین
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                                    <p className="mr-1">
                                        آنلاین
                                    </p>
                                </div>
                            </td>
                            <td className="px-6 py-4">

                                <button data-modal-show="editUserModal" onClick={handleShowModal} type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                                    <a className="font-medium text-white">ویرایش </a>
                                </button>
                                <button type="button" className="mr-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                                    <a className="font-medium text-white">حذف</a>
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="https://wallpapers-clan.com/wp-content/uploads/2023/02/anime-boy-black-pfp-2.jpg" alt="image" />
                                <div className="pr-3">
                                    <div className="text-base font-semibold">علی مرتضی یلمازتکین</div>
                                    <div className="font-normal text-gray-500">alimurtaza7x@gmail.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                ادمین
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                                    <p className="mr-1">
                                        آنلاین
                                    </p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button data-modal-show="editUserModal" onClick={handleShowModal} type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                                    <a className="font-medium text-white">ویرایش </a>
                                </button>
                                <button type="button" className="mr-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                                    <a className="font-medium text-white">حذف</a>
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="https://wallpapers-clan.com/wp-content/uploads/2023/02/anime-boy-black-pfp-2.jpg" alt=" image" />
                                <div className="pr-3">
                                    <div className="text-base font-semibold">علی مرتضی یلمازتکین</div>
                                    <div className="font-normal text-gray-500">alimurtaza7x@gmail.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                سوپر ادمین
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                                    <p className="mr-1">
                                        آفلاین
                                    </p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button data-modal-show="editUserModal" onClick={handleShowModal} type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                                    <a className="font-medium text-white">ویرایش </a>
                                </button>
                                <button type="button" className="mr-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                                    <a className="font-medium text-white">حذف</a>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* Modal Section */}
                {showModal ?
                    <Modal handleShowModal={handleShowModal} />
                    : null}
            </div>
        </>
    );
}

export default Users;