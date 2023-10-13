import { NavBar } from "../00_Resuable_Components/01_Nav"
import { TheForm } from "../03_Contact_Components/01_Contact_Form"

export const Contact = (): JSX.Element => {

    window.scrollTo({top: 0})


    return (
        <main 
            className={`
                w-full h-[100vmax] relative z-[400]
                    
                sm:landingContainerDesktop sm:h-[100vh] sm:flex sm:flex-col sm:justify-start sm:items-center
            `}
        >
            
            <NavBar link2='/MyWork' />

            <section
                className={`
                    w-full h-[87%]
                    flex items-end

                    sm:h-[94%] sm:items-center sm:justify-center
                `}
            >

                <TheForm />

            </section>

        </main>
    )
}