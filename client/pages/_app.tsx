import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    import("flowbite/dist/flowbite");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
