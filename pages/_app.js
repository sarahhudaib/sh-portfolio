import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar /> 
    {/* why only here? because we want to make sure that it appears on every single page */}
    
    <Component {...pageProps} />
    
    
  </>
}

export default MyApp
