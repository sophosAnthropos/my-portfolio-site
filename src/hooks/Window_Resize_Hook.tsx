import { useState, useEffect } from "react";

export const useWindowResize = () => {
    
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})


    useEffect(() => {
        
        function handleWindowSize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", handleWindowSize)

        handleWindowSize()

        return () => window.removeEventListener("resize", handleWindowSize)

    }, [])

    return windowSize
}