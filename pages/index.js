import Head from 'next/head'
import { Home } from "@/views/index"

const Index = () => {
  return (
    <div className="">
      <Head>
        <title>Ferhan Cihaner</title>
      </Head>
      <Home />
    </div>
  )
}

export default Index