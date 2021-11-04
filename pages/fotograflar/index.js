import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Home, InsideHeader, PhotoPagination, PhotoList } from "@/views/index"
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "@/redux/store"
import { getImagesData_r } from "@/redux/actions"
import axios from "axios"

const Photos = () => {
    const dispatch = useDispatch()
    const { imagesData } = useSelector(({ imagesData }) => imagesData);
    const { imagesPagination } = useSelector(({ imagesPagination }) => imagesPagination);



    return (
        <div className="">
            <Head>
                <title>Fotoğraflar</title>
            </Head>
            <InsideHeader title="Fotoğraflar" />
            <div className="container py-3   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-8 mt-10">
                {imagesData.slice(imagesPagination.offset, imagesPagination.limit).map(image => <PhotoList image={image} />)}
            </div>
            <div className="container my-4 mx-auto">
                <PhotoPagination length={imagesData.length} />
            </div>

        </div>
    )
}


export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async ({ req, res }) => {
        await store.dispatch(getImagesData_r(req))
    });



export default Photos