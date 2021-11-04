import Link from "next/link"
import { useSelector } from "react-redux"
import { SocialMedia, MenuItem } from "@/components/ui/"

const DefaultFooter = () => {
    const { menuData } = useSelector(({ menuData }) => menuData)

    const menu = menuData
    return (
        <div className="bg-black w-full py-10 pb-16 mt-10 ">
            <div className="container mx-auto grid grid-cold md:flex md:justify-between justify-center px-3 md:px-0">
                <div className="flex-col flex">

                    <Link href="/"><img src="/assets/images/logo-light.png" className="w-40 mx-auto" /></Link>
                    <SocialMedia dark={false} />
                </div>
                <div className="text-gray-300  flex h-20  text-sm">
                    <span className="  self-end">  copyright © ferhancihaner.com asdas</span>
                </div>
            </div>
        </div>
    )
}

export default DefaultFooter
