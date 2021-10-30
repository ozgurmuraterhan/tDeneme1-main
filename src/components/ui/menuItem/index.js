
function index({ menu }) {
    return (

        <li className="group relative" key={menu.id}>
            <a href={menu.url} className="w-full flex border-t -mt-0.1 py-2 md:py-0 border-b md:w-auto md:flex-none md:border-none ">
                {menu.title}
            </a>
            {menu.child ?
                <ul className=" text-sm md:text-xs  mb-2 gap-y-4 shadow-lg bg-transparent relative  hidden group-hover:block md:group-hover:absolute md:bg-white md:p-4  ">
                    {menu.child.map(childItem => <li className=" flex" key={childItem.id}> <a href={childItem.url} className=" py-2 md:py-1"> {childItem.title} </a></li>)}
                </ul>
                : ""}

        </li>

    )
}

export default index
