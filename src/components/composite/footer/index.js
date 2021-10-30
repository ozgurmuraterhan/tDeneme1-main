import { useState, useEffect } from "react"

import Router from "next/router"
import HomeFooter from "./homeFooter"
import DefaultFooter from "./defaultFooter"

function Footer() {

    const [isHomeFooter, setIsHomeFooter] = useState(false)

    useEffect(() => {
        setIsHomeFooter(Router.router?.asPath == "/" ? true : false)
    }, [])
    return (
        <>
            {isHomeFooter ?
                <HomeFooter />
                :
                <DefaultFooter />
            }
        </>
    )
}

export default Footer
