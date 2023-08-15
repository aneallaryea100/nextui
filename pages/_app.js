import '../styles/styles.css'
import { SessionProvider } from "next-auth/react";
import { useRouter } from 'next/router';
import Nav from '@components/nav';
import Footer from '@components/footer';

function MyApp({Component, pageProps}){
    const router = useRouter();
    const showHeader = router.pathname === '/login' ? false : true;
    const showRegister = router.pathname === '/register' ? false : true;
    return (
        <SessionProvider session={pageProps.session}>
           {showRegister && showHeader && <Nav />}
             <Component {...pageProps} />
           {showRegister && showHeader && <Footer />}
        </SessionProvider>
        
    )
    
}

export default MyApp