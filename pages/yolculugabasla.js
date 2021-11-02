import { useState, useEffect } from 'react'
import Head from 'next/head'
import { GoTrip, InsideHeader } from "@/views/index"
import { useSelector, useDispatch } from 'react-redux'
import { formDataSave_r } from "@/redux/actions"
const Default = () => {


    return (
        <div className="">
            <Head>
                <title>Yolculuğa Çık</title>
            </Head>
            <InsideHeader title="Yolculuğa Başla" />
            <GoTrip />
        </div>
    )
}

export default Default