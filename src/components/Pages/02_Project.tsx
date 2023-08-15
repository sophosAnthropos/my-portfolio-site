import { NavBar } from "../00_Resuable_Components/01_Nav"


export const Projects = (): JSX.Element => {

    return (
        <main 
            className={`
                w-full h-[100vmax] relative z-[400]
                    
                sm:landingContainerDesktop sm:h-[100vh] sm:flex sm:flex-col sm:justify-center sm:items-center
            `}
        >
            
            <NavBar link2='/Contact' />
        
        </main>
    )
}