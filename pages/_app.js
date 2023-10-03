import '../styles/styles.css'
import { SessionProvider } from "next-auth/react";
import { useRouter } from 'next/router';
import Nav from '@components/nav';
import Footer from '@components/footer';
import './globals.css'
import { ReduxProvider } from '@redux/provider';


function MyApp({Component, pageProps}){
    const router = useRouter();
    const showHeader = router.pathname === '/login' ? false : true;
    const showRegister = router.pathname === '/register' ? false : true;
    const showOrder = router.pathname === '/order/[ordername]' ? false : true;
    
    return (
        <SessionProvider session={pageProps.session}>
          <ReduxProvider>
           {showRegister && showHeader && showOrder &&<Nav />}
             <Component {...pageProps} />
           {showRegister && showHeader && showOrder &&<Footer />}
          </ReduxProvider>
        </SessionProvider>
        
    )
    
}

export default MyApp