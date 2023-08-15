import { NavBar } from "../00_Resuable_Components/01_Nav"
import { TheForm } from "../03_Contact_Components/01_Contact_Form"

export const Contact = (): JSX.Element => {

    return (
        <main 
            className={`
                w-full h-[100vmax] relative z-[400]
                    
                sm:landingContainerDesktop sm:h-[100vh] sm:flex sm:flex-col sm:justify-start sm:items-center
            `}
        >
            
            <NavBar link2='/Projects' />

            <section
                className={`
                    w-full h-[96.5%]
                    flex items-end
                    sm:h-[94%] sm:flex sm:justify-center sm:items-end
                `}
            >

                <TheForm />

            </section>

        </main>
    )
}