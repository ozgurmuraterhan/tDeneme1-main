import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Home, InsideHeader, PhotoPagination } from "@/views/index"
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "@/redux/store"
import { getImagesData_r } from "@/redux/actions"
import axios from "axios"

const Default = () => {
    const dispatch = useDispatch()
    const { imagesData } = useSelector(({ imagesData }) => imagesData);
    const { imagesPagination } = useSelector(({ imagesPagination }) => imagesPagination);

    const [data, setData] = useState([])


    useEffect(() => {
        setData(imagesData)
    }, [])



    return (
        <div className="">
            <Head>
                <title>Fotoğraflar</title>
            </Head>
            <InsideHeader title="Fotoğraflar" />
            <div className="container grid grid-cols-3 mx-auto">
                {data.slice(imagesPagination.offset, imagesPagination.limit).map(image =>
                    <div key={image.id}>
                        <img src={image.url} width="200" height="200" />
                        <h1>{image.id}{image.title}</h1>
                    </div>
                )}


            </div>
            <div className="container mx-auto">

                <PhotoPagination length={data.length} />
            </div>

        </div>
    )
}


export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async ({ req, res }) => {
        await store.dispatch(getImagesData_r(req))
    });



export default Default