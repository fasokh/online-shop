import React, { FC, useEffect, useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { useRouter } from "next/router";
import HomeIcon from "./icons/HomeIcon";
import Link from "next/link";

const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(lastScrollPos > currentScroll || currentScroll < 10);
      setLastScrollPos(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  const rout = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string) => {
    rout.push(path);
  };

  return (
    <div
      className={`md:fixed md:top-20 md:left-0 md:w-full md:z-40 bg-white md:transform md:duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative p-3 flex w-full justify-between items-center px-8 font-sans font-bold">
        <div className="hidden absolute md:flex gap-4 justify-start items-center w-26">
          <ul className="overflow-hidden m-0 p-0">
            <li className="inline px-4 py-6 hover:bg-gray-100">
              <button
                className="inline-block py-3"
                onClick={() => handleNavigation("contact")}
              >
                تماس با ما
              </button>
            </li>
            {/* <li className="inline px-4 py-6 hover:bg-gray-100">
              <button
                className="inline-block py-3"
                onClick={() => handleNavigation("about")}
              >
                درباره شرکت
              </button>
            </li> */}
          </ul>
        </div>
        <div className="hidden md:flex justify-center items-center m-auto">
          <ul className="overflow-hidden m-0 p-0">
            <li className="inline px-4 py-6 hover:bg-gray-100 rounded-md">
              <button
                className="inline-block py-3"
                onClick={() => handleNavigation("/men")}
              >
                مردانه
              </button>
            </li>
            <li className="inline px-4 py-6 hover:bg-gray-100">
              <button
                className="inline-block py-3"
                onClick={() => handleNavigation("/women")}
              >
                زنانه
              </button>
            </li>
            <li className="inline px-4 py-6 hover:bg-gray-100">
              <Link className="inline-block py-3" href="/">
                تجهیزات
              </Link>
            </li>
          </ul>
        </div>
        <div className="mr-5">
          <HomeIcon />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0 before:content-[''] before:absolute before:left-8 before:right-8 before:border-b before:border-gray-400"></div>

        <div className="md:hidden flex justify-end w-full mt-20">
          <button className="focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden w-36 absolute right-0 top-32 bg-white float-right text-right rtl">
            <ul className="flex flex-col gap-4">
              <li>
                <button
                  onClick={() => handleNavigation("/women")}
                  className="block hover:bg-gray-100 py-2 px-4  float-right text-right rtl"
                >
                  زنانه
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/men")}
                  className="block hover:bg-gray-100 py-2 px-4 float-right text-right rtl"
                >
                  مردانه
                </button>
              </li>
              <li>
                <button className="block hover:bg-gray-100 py-2 px-4 float-right text-right rtl">
                  تجهیزات
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="block hover:bg-gray-100 py-2 px-4 float-right text-right rtl"
                >
                  تماس با ما
                </button>
              </li>
              {/* <li>
                <button
                  className="block hover:bg-gray-100 py-2 px-4 float-right text-right rtl"
                  onClick={() => handleNavigation("/about")}
                >
                  درباره شرکت
                </button>
              </li> */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
