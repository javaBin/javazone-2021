import { useState, useEffect } from "react";
import { NavRoute } from "../../components/Navigation/Navigation";

//TODO remove this, render 404 a different way
function match(url: string, pathname: string): boolean{
    const urlParts = url.split("/")
    const pathParts = pathname.split("/")

    if(urlParts.length !== pathParts.length){
        return true
    }

    for (let index = 0; index < urlParts.length; index++){
        let part = urlParts[index]
        if(part !== pathParts[index] && !part.startsWith(":")){
            return true
        }
    }
    return false
}

export function useIsFrontpage(pathname: string, routes: NavRoute[]) {
    const [isFrontpage, setIsFrontpage] = useState(true);
    useEffect(() => {
        const isNotFound = routes.every((route) => match(route.url, pathname));
        setIsFrontpage(pathname === '/' || isNotFound);
    }, [pathname, routes]);  
    return isFrontpage
}