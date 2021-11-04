import { useState, useEffect } from "react"

import Router from "next/router"
import HomeFooter from "./HomeFooter"
import DefaultFooter from "./DefaultFooter"

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
