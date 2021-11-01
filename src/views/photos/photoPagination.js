import { imagesPagination_r } from "@/redux/actions"

import { useDispatch } from "react-redux";

function PhotoPagination({ length }) {
    const dispatch = useDispatch()
    const pag = []


    for (let i = 1; i <= Math.ceil(length / 12); i++) {

        const data = {
            offset: (i * 12 - 12),
            limit: i * 12
        }

        pag.push(
            <button key={i} className="px-3 py-1 bg-gray-200 m-1 rounded-3xl font-bold text-black cursor-pointer hover:shadow focus:bg-gray-300 text-center"
                onClick={() => dispatch(imagesPagination_r(data))}>
                {i}
            </button>
        )
    }


    return <div className="flex justify-center">{pag}</div>
}

export default PhotoPagination
