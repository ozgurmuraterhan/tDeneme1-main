import { SocialMedia } from "@/components/ui"

const HomeFooter = () => {
    return (
        <div className="container mx-auto text-center md:text-right text-gray-500 text-xs my-6">
            <div className="visible md:invisible my-6">
                <SocialMedia dark={false} />
            </div>
            copyright © ferhancihaner.com
        </div>
    )
}

export default HomeFooter
