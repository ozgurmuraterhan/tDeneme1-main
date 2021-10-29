import { useState, useEffect } from "react"

import Router from "next/router"
import { DefaultFooter, HomeFooter } from "@/components/ui/"

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
