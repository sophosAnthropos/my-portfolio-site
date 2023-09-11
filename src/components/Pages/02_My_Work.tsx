import { NavBar } from "../00_Resuable_Components/01_Nav"
import { ProjectsSection } from "../02_Projects_Components/01_Projects_Section"
import { DemosSection } from "../02_Projects_Components/02_Demos_Section"


export const MyWork = (): JSX.Element => {

    return (
        <main 
            className={`
                w-full h-auto relative z-[400] bg-cover bg-center overflow-hidden
                    
                sm:h-full sm:flex sm:flex-col sm:justify-center sm:items-center 
            `}
        >
            
            <NavBar link2='/Contact' />

            <main
                className={`
                    w-full h-auto pb-[3.5%] flex flex-col items-center
                `}
            >
                <ProjectsSection/>
                <DemosSection />

            </main>
        
        </main>
    )
}