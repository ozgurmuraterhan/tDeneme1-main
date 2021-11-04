import { useState, useEffect } from 'react'
import Head from 'next/head'
import { InsideHeader } from "@/views/index"
import { useRouter } from "next/router"
import { useSelector } from "react-redux";
import { getImagesData_r } from "@/redux/actions"
import { wrapper } from "@/redux/store"


const Photo = () => {
    const router = useRouter()
    const { id } = router.query
    const { imagesData } = useSelector(({ imagesData }) => imagesData);
    const [data, setData] = useState({ a: 1 })

    useEffect(() => {
        setData(imagesData.find(val => val.id == id))
    }, [])

    return (
        <div className="">
            <Head>
                <title>Fotoğraf Detay</title>
            </Head>
            <InsideHeader title="Fotoğraf Detay" />
            <div className="md:container grid grid-cols-1 mx-4 md:mx-auto gap-8 mt-10">
                <img src={data.url} className=" w-full" />
            </div>
        </div>
    )
}
export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async ({ req, res }) => {
        await store.dispatch(getImagesData_r(req))
    });





export default Photo