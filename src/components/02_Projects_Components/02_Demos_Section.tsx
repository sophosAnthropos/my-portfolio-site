import { useWindowResize } from "../../hooks/Window_Resize_Hook"
import { MobileWorksComponent } from "../00_Resuable_Components/02_Works_Mobile"
import mobileMentalHealthcareDemoSiteImages from "../../assets/Images/Mobile_Mental_Healthcare_Demo.png"
import desktopMentalHealthcareDemoSiteImages from "../../assets/Images/Desktop_Mental_Healthcare_Demo.png"
import { WorksComponentsDesktop } from "../00_Resuable_Components/03_Works_Desktop"

export const DemosSection = ():JSX.Element => {
    const {width, } = useWindowResize()

    return (
        <section
            className={`
                w-full h-auto
                sm:flex sm:flex-col sm:items-center
            `}
        >
            <header
                className={`
                    w-full h-[70px] flex justify-center mt-2 bg-purple-600 border-y-4 border-yellow-50
                `}
            >
                <h2
                    className={`
                        w-2/3 h-full flex justify-center items-center techText text-3xl tracking-wider text-yellow-50
                    `}
                >
                    Demos
                </h2>
            </header>

            {
                width < 640 ? 
                    <MobileWorksComponent 
                        worksName="Mental Healthcare Demo Site" 
                        desktopImage={desktopMentalHealthcareDemoSiteImages} 
                        mobileImage={mobileMentalHealthcareDemoSiteImages} 
                        headerWidth="w-full"
                        lastChild={true}
                        codeRepo="https://github.com/sophosAnthropos/Mental_Healthcare_Site_Demo"
                        siteURL="https://sophosanthropos.github.io/Mental_Healthcare_Site_Demo/"
                    >
                    </MobileWorksComponent>
                : 
                    <WorksComponentsDesktop 
                        worksName="Mental Healthcare Demo Site" 
                        desktopImage={desktopMentalHealthcareDemoSiteImages} 
                        mobileImage={mobileMentalHealthcareDemoSiteImages}
                        lastChild={true}
                        codeRepo="https://github.com/sophosAnthropos/Mental_Healthcare_Site_Demo"
                        siteURL="https://sophosanthropos.github.io/Mental_Healthcare_Site_Demo/"
                    >
                    </WorksComponentsDesktop>
            }

        </section>
    )
}