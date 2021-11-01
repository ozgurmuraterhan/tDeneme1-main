import Link from "next/link"
function PhotoList({ image }) {
    return (
        <Link href={`/fotograflar/${image.id}`}>
            <img src={image.thumbnailUrl} className="w-full" />
        </Link>
    )
}

export default PhotoList
