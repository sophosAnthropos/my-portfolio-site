import portfolioSiteMobile from "../../assets/Images/Mobile_Portfolio_Site.png"
import portfolioSiteDesktop from "../../assets/Images/Desktop_Portfolio_Site.png"
import myPigGameMobile from "../../assets/Images/Mobile_Pig_Game.png"
import myPigGameDesktop from "../../assets/Images/Desktop_Pig_Game.png"
import { useWindowResize } from "../../hooks/Window_Resize_Hook"
import { MobileWorksComponent } from "../00_Resuable_Components/02_Works_Mobile"
import { WorksComponentsDesktop } from "../00_Resuable_Components/03_Works_Desktop"

export const ProjectsSection = ():JSX.Element => {
    const {width, } = useWindowResize()

    return (
        <section
            className={`
                w-full h-auto

                sm:flex sm:flex-col sm:items-center sm:my-8
            `}
        >
            <header
                className={`
                    w-full h-[70px] flex justify-center mt-2 bg-orange-400 border-y-4 border-yellow-50 
                `}
            >
                <h2
                    className={`
                        w-2/3 h-full flex justify-center items-center techText text-3xl tracking-wider text-yellow-50
                    `}
                >
                    PROJECTS
                </h2>
            </header>

            {
                width < 640 ? 
                    <MobileWorksComponent 
                        worksName="CK Dev" 
                        desktopImage={portfolioSiteDesktop} 
                        mobileImage={portfolioSiteMobile} 
                        headerWidth="w-1/4"
                        lastChild={false}
                        codeRepo=""
                        siteURL=""
                    >
                        <p
                            className={`
                                w-full h-[150px] text-justify
                            `}
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quia optio tempora at sunt excepturi dolorum illum ipsam commodi. Nemo pariatur molestias soluta? Recusandae similique consequuntur sequi unde? Corporis, veritatis!
                        </p>
                         <a 
                            href="https://github.com/sophosAnthropos/my-portfolio-site"
                            className={`
                                w-1/2 h-[50px] flex justify-center items-center
                                text-orange-600 tracking-wide font-bold
                                bg-neutral-700 border-2 px-2 rounded-lg
                            `}
                        >VIEW CODE</a>
                    </MobileWorksComponent>
                : 
                    <WorksComponentsDesktop 
                        worksName="CK Dev" 
                        desktopImage={portfolioSiteDesktop} 
                        mobileImage={portfolioSiteMobile}
                        lastChild={false}
                        codeRepo=""
                        siteURL="" 
                    >
                        <p
                            className={`
                                w-[80%] h-2/3 text-justify text-sky-50
                            `}
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quia optio tempora at sunt excepturi dolorum illum ipsam commodi. Nemo pariatur molestias soluta? Recusandae similique consequuntur sequi unde? Corporis, veritatis!
                        </p>
                        <div
                            className={`
                                w-4/5 h-1/4 flex justify-evenly items-center
                            `}
                        >
                           <a 
                                href="https://github.com/sophosAnthropos/my-portfolio-site"
                                className={`
                                    w-2/5 h-3/4 flex justify-center items-center 
                                    text-orange-500 tracking-wide font-bold
                                    bg-neutral-700 border-2 rounded-lg
                                `}
                            >VIEW CODE</a>
                        </div>
                </WorksComponentsDesktop>
            }



            

{
                width < 640 ? 
                    <MobileWorksComponent 
                        worksName="My Pig Game" 
                        desktopImage={myPigGameDesktop} 
                        mobileImage={myPigGameMobile} 
                        headerWidth="w-[45%]"
                        lastChild={true}
                        codeRepo="https://github.com/sophosAnthropos/Pig-Game"
                        siteURL="https://sophosanthropos.github.io/Pig-Game/"
                    >
                    </MobileWorksComponent> 
                : 

                    <WorksComponentsDesktop 
                        worksName="My Pig Game" 
                        desktopImage={myPigGameDesktop} 
                        mobileImage={myPigGameMobile} 
                        lastChild={true}
                        codeRepo="https://github.com/sophosAnthropos/Pig-Game"
                        siteURL="https://sophosanthropos.github.io/Pig-Game/"
                    >
                    </WorksComponentsDesktop>
            }

        </section>
        
    )
}