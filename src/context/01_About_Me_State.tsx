import { createContext, useState } from "react";

export const AboutMeStateContext = createContext(null as any)

export const AboutMeStateContextProvider = ({children}: {children: JSX.Element[]}) => {
    const [isOpen, aboutMeState] = useState(false)
    return (
        <AboutMeStateContext.Provider value={[isOpen, aboutMeState]} >
            {children}
        </AboutMeStateContext.Provider>

    )
}