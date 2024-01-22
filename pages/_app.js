import '../styles/styles.css'
import { SessionProvider } from "next-auth/react";
import Nav from '@components/nav';
import Footer from '@components/footer';
import './globals.css'
import { ReduxProvider } from '@redux/provider';


export const metadata = {
  manifest: "/manifest.json",
  title: 'TRIBALS',
  description: 'This is a tribals app',
}

export const viewport = {
  themeColor: "#355C7D",
};


function MyApp({Component, pageProps}){

    if(Component.getLayout) {
      return Component.getLayout(<Component {...pageProps} />)
    }
    
    return (
  
            <ReduxProvider>
              <SessionProvider session={pageProps.session}>
                <Nav />
                  <Component {...pageProps} />
                <Footer/>
              </SessionProvider>
            </ReduxProvider>
            
    )
    
}

export default MyApp; 