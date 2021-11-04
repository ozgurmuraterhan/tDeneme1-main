import React from 'react'
import Footer from "@/components/composite/footer"
import Header from "@/components/composite/Header"

const Layout = ({ children }) => {
    return (
        <>
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout
