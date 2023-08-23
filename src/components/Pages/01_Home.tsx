import { useState, useEffect } from "react";
import { useWindowResize } from "../../hooks/Window_Resize_Hook";
import { NameAndLogoDesktop } from "../01_Home_Components/Name_And_Logo/01_Name_And_Logo_Desktop";
import { NameAndLogoMobile } from "../01_Home_Components/Name_And_Logo/02_Name_And_Logo_Mobile";
import { MyTitle } from "../01_Home_Components/02_My_Title";
import { ImportantLinks } from "../01_Home_Components/03_Important_Links";
import { AboutMe } from "../01_Home_Components/About_Me/01_About_Me";
import { NavButtons } from "../01_Home_Components/05_Nav_Buttons";
import { AboutMeStateContextProvider } from "../../context/01_About_Me_State";
import { OpenAboutMeBtn } from "../01_Home_Components/04_About_Me_Button";

export const Home = (): JSX.Element => {

    const {width, } = useWindowResize()
    const [nameLogoComponent, setNameLogoComponent] = useState(<></>)

    useEffect(() => {

        if (width < 640) {
            setNameLogoComponent(<NameAndLogoMobile/>)
        }
        else {
            setNameLogoComponent(<NameAndLogoDesktop/>)
        }

    }, [width])


    return (
        <main
            className={`
                w-full h-[100vmax] relative z-[400] flex flex-col justify-around
                
                sm:landingContainerDesktop sm:h-[100vh] sm:flex sm:flex-col sm:justify-center sm:items-center 
            `}
        >
                <AboutMeStateContextProvider>
                    <AboutMe />
                    <OpenAboutMeBtn/>
                </AboutMeStateContextProvider>

                <div
                    className={`
                        w-full h-[45%] 
                        sm:h-[40%] sm:flex sm:flex-col sm:justify-around sm:items-center
                    `}
                >
                    {nameLogoComponent}
                    <MyTitle />
                </div>
                <ImportantLinks />
                <NavButtons />
        </main>
    )
}