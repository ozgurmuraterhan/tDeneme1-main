import { useState, useEffect } from "react"
import Link from "next/link"
import { useSelector } from "react-redux"
import { HamburgerMenuIcon } from "@/commons/index"
import { MenuItem, SocialMedia } from "@/components/ui/"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const { menuData } = useSelector(({ menuData }) => menuData)

    const menu = menuData

    return (
        <div className="md:container  mx-3.5 md:mx-auto my-8 flex justify-between items-center flex-wrap ">


            <Link href="/">
                <a href="#" className="w-40">
                    <img src="/assets/images/logo.png" className={`w-full ${openMenu ? " hidden " : " "}`} />
                    <img src="/assets/images/logo-light.png" className={`w-full ${openMenu ? " w-full   z-20 relative   " : "hidden"}`} />
                </a>
            </Link>


            <ul className={`${openMenu ? "left-0  w-full h-full" : "left-full md:left-auto md:flex "} transition-all  text-sm gap-x-8 pl-12 font-bold fixed top-0 left-0 w-full h-full pt-48 md:pt-0 md:pt-auto text-white bg-black flex-none z-10 md:flex  md:bg-transparent md:relative md:text-black md:w-auto md:h-auto `}>
                {menu && menu.map(menuItem => <MenuItem key={menuItem.id} menu={menuItem} />)}
                <div className={` ${openMenu ? "  " : "hidden "}`}>
                    <SocialMedia dark={false} />
                </div>
            </ul>
            <div className="absolute md:hidden z-20 right-6 top-9 cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
                <HamburgerMenuIcon className={`fill-current ${openMenu ? "text-white" : "text-black"}  `} />
            </div>

        </div>
    )
}

export default Header
