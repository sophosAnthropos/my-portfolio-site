import { NavBar } from "../00_Resuable_Components/01_Nav"
import { ProjectsSection } from "../02_Works_Components/01_Projects_Section"
import { DemosSection } from "../02_Works_Components/02_Demos_Section"
import { BackToTopBtn } from "../00_Resuable_Components/04_Back_To_Top_Btn"


export const MyWork = (): JSX.Element => {

    window.scrollTo({top: 0})

    return (
        <main 
            className={`
                w-full h-auto relative z-[400] overflow-hidden
                    
                sm:flex sm:flex-col sm:justify-center sm:items-center
            `}
        >
            
            <NavBar link2='/Contact' />

            <main
                className={`
                    w-full h-auto pb-[3.5%] flex flex-col items-center justify-around
                     
                `}
            >
                <ProjectsSection/>
                <DemosSection />

            </main>

            <BackToTopBtn/>

        </main>
    )
}