import React from 'react'
import Footer from "./footer"
import Header from "./header"

function layoult({ children }) {
    return (
        <>
            <Header />

            {children}

            <Footer />
        </>
    )
}

export default layoult
