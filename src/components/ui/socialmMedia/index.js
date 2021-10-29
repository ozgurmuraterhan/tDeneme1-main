import { Facebook, Twitter, Youtube, Instagram } from '@/commons/index'

function index() {
    return (
        <div className="fixed left-3 top-1/2 flex gap-y-4  flex-col">
            <Facebook className="fill-current transition-all text-gray-300 hover:text-black" />
            <Twitter className="fill-current transition-all text-gray-300 hover:text-black" />
            <Instagram className="fill-current transition-all text-gray-300 hover:text-black" />
            <Youtube className="fill-current transition-all text-gray-300 hover:text-black" />
        </div>
    )
}

export default index
