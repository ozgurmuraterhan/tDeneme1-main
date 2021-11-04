import Head from 'next/head'
import { GoJourney, InsideHeader } from "@/views/index"


const GoTrip = () => {
    return (
        <div className="">
            <Head>
                <title>Yolculuğa Çık</title>
            </Head>
            <InsideHeader title="Yolculuğa Başla" />
            <GoJourney />
        </div>
    )
}

export default GoTrip