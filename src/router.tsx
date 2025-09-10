import React, { Suspense, lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import Layout from '@/components/Layout'

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));

const withSuspense = (Component: React.ComponentType) => (
    <Suspense fallback={
        <div className="container flex flex-col justify-center items-center py-4">
            Chargement...
        </div>}
        >
            <Component/>
    </Suspense>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { index: true, element: withSuspense(Home) },
            { path: "/about", element: withSuspense(About) },
            { path: "/contact", element: withSuspense(Contact) },
            { path: "*", element: withSuspense(PageNotFound) }
        ]
    }
])

export default router