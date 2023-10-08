const Createblog = () => {
    return (<form className="w-full bg-gray-50 dark:bg-gray-800 rounded p-4">
        <div className="flex w-full justify-between flex-wrap">
            <div className=" flex flex-col w-96">
                <label htmlFor="writer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام نویسنده</label>
                <input type="text" id="writer" className="bg-gray-50 border
             border-gray-300
             text-gray-900 
               text-sm rounded-lg
             focus:ring-blue-500
             focus:border-blue-500
               block w-full p-2.5
             dark:bg-gray-700
             dark:border-gray-600
             dark:placeholder-gray-400
             dark:text-white
             dark:focus:ring-blue-500
             dark:focus:border-blue-500"
                    placeholder="نام نویسنده را وارد کنید..." required />
                <label htmlFor="grouping" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">انتخاب دسته بندی</label>
                <select id="grouping" className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>تکنولوژی</option>
                    <option>تجارت</option>
                    <option>بازار کار</option>
                    <option>درآمدزایی</option>
                </select>
            </div>
            <div className=" flex flex-col w-96 mt-4 sm:mt-0">
                <label htmlFor="writer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عنوان بلاگ</label>
                <input type="text" id="writer" className="bg-gray-50 border
             border-gray-300
             text-gray-900 
               text-sm rounded-lg
             focus:ring-blue-500
             focus:border-blue-500
               block w-full p-2.5
             dark:bg-gray-700
             dark:border-gray-600
             dark:placeholder-gray-400
             dark:text-white
             dark:focus:ring-blue-500
             dark:focus:border-blue-500"
                    placeholder="عنوان بلاک را وارد کنید..." required />

                <label htmlFor="writer" className="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">معرفی بلاگ</label>
                <input type="text" id="writer" className="bg-gray-50 border
             border-gray-300
             text-gray-900 
               text-sm rounded-lg
             focus:ring-blue-500
             focus:border-blue-500
               block w-full p-2.5
             dark:bg-gray-700
             dark:border-gray-600
             dark:placeholder-gray-400
             dark:text-white
             dark:focus:ring-blue-500
             dark:focus:border-blue-500"
                    placeholder="بلاگ خود را معرفی کنید..." required />
            </div>
        </div>
        <label htmlFor="blog" className="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">متن بلاک</label>
        <textarea id="blog" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        <div className="flex w-full justify-center items-center mt-6">
            <button type="submit" className="w-60 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ساخت بلاک</button>
        </div>


    </form>);
}

export default Createblog;