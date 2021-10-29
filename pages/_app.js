import '../public/global.scss'
import AppLayout from "../src/components/composite/layout"
function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
