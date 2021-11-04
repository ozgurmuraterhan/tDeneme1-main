import { IoIosArrowDown } from "react-icons/io"
const MenuItem = ({ menu }) => {
    return (

        <li className="group relative" key={menu.id}>
            <a href={menu.url} className="w-full flex border-t -mt-0.1 py-2 md:py-0 border-b md:w-auto md:flex-none md:border-none ">
                {menu.title}
                {menu.child ? <IoIosArrowDown className="mt-1 ml-2" /> : ""}
            </a>
            {menu.child ?

                <ul className=" transition-all  text-sm md:text-xs gap-y-4 shadow-lg bg-transparent relative h-0 md:divide-y-2   overflow-hidden  group-hover:h-40 md:group-hover:h-44 md:rounded-lg md:shadow-lg  md:absolute md:bg-white  ">
                    {menu.child.map(childItem => <li className=" flex md:mt-0.1 md:hover:scale-105 " key={childItem.id}> <a href={childItem.url} className=" py-2 md:py-3 md:mx-3 "> {childItem.title} </a></li>)}
                </ul>
                : ""}

        </li>

    )
}

export default MenuItem
