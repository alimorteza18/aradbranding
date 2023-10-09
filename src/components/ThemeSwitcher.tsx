"use client";
import { useTheme } from "next-themes";
import {BsFillSunFill, BsFillMoonStarsFill} from "react-icons/bs"

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={`w-fit p-2 hover:scale-110 active:scale-100 duration-200 dark:bg-[#212933] text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-yellow-300/80 dark:shadow-lg dark:shadow-cyan-100/50 rounded-full  text-center mr-3`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <BsFillSunFill className="text-yellow-500"/> : <BsFillMoonStarsFill className="text-white"/>}
    </button>
  );
};