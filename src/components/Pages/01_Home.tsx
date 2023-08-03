import { NameAndLogo } from "../01_Home_Components/01_Name_And_Logo";
import { MyTitle } from "../01_Home_Components/02_My_Title";
import { ImportantLinks } from "../01_Home_Components/03_Important_Links";
import { AboutMe } from "../01_Home_Components/About_Me/01_About_Me";
import { NavButtons } from "../01_Home_Components/05_Nav_Buttons";
import { AboutMeStateContextProvider } from "../../context/01_About_Me_State";
import { OpenAboutMeBtn } from "../01_Home_Components/04_About_Me_Button";

export const Home = (): JSX.Element => {

    return (
        <main
            className={`
                h-[100vmax] bg-portraitBG bg-cover bg-center relative
                
                sm:landingContainerDesktop sm:h-[100vh] sm:bg-landscapeBG sm:bg-fixed sm:flex sm:flex-col sm:justify-center sm:items-center 
            `}
        >
                <AboutMeStateContextProvider>
                    <AboutMe />
                    <OpenAboutMeBtn/>
                </AboutMeStateContextProvider>

                <NameAndLogo />
                <MyTitle />
                <ImportantLinks />
                <NavButtons />
        </main>
    )
}