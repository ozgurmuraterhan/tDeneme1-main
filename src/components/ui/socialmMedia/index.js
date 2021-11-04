import { Facebook, Twitter, Youtube, Instagram } from '@/commons/index'

const SocialMedia = ({ dark = true }) => {
    return (
        <div className={`${dark ? "fixed left-3 top-1/2 flex gap-y-4  flex-col" : "  flex gap-x-5 mt-5 justify-center"}`}>
            <Facebook className={`fill-current transition-all text-gray-300 ${dark ? "hover:text-black" : "hover:text-white"}`} />
            <Twitter className={`fill-current transition-all text-gray-300  ${dark ? "hover:text-black" : "hover:text-white"}`} />
            <Instagram className={`fill-current transition-all text-gray-300  ${dark ? "hover:text-black" : "hover:text-white"}`} />
            <Youtube className={`fill-current transition-all text-gray-300  ${dark ? "hover:text-black" : "hover:text-white"}`} />
        </div>
    )
}

export default SocialMedia
