import Head from 'next/head'
import { Home } from "@/views/index"

export default function Default() {
  return (
    <div className="">
      <Head>
        <title>Ferhan Cihaner</title>
      </Head>
      <Home />
    </div>
  )
}
