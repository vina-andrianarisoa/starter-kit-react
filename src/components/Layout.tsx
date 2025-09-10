import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header/>

            <main className="container flex-1">
                <Outlet/>
            </main>

            <Footer/>
        </div>
    )
}

export default Layout