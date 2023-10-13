import portfolioSiteMobile from "../../assets/Images/Mobile_Portfolio_Site.png"
import portfolioSiteDesktop from "../../assets/Images/Desktop_Portfolio_Site.png"
import myPigGameMobile from "../../assets/Images/Mobile_Pig_Game.png"
import myPigGameDesktop from "../../assets/Images/Desktop_Pig_Game.png"
import { useWindowResize } from "../../hooks/Window_Resize_Hook"
import { MobileWorksComponent } from "../00_Resuable_Components/02_Works_Mobile"
import { WorksComponentsDesktop } from "../00_Resuable_Components/03_Works_Desktop"


let portfolioSiteDescription: string = "Dev CK is my portfolio website, and is, obviously, where you are currently reading this summary. Simply navigate around and it will be clear that this was built around my tenets of keeping both the interface and user experience simple, natural, and non-repetitive. Those tenets will remain my foundation as my skills develope further, and will be reflected in all changes on this website as time moves forward."

let pigGameSiteDescription: string = "Inspired by an infinitely simpler version, the pig game was the 1st ever work I constructed, initially in vanilla Js. The one presented here is the 2nd iteration of my game, retyped from the ground up with TS, React, and TailwindCSS. Despite simple mechanics, I created a logical infrastructure for the movement & short term storage of data, to include numerous features missing from the game that inspired me. Some features I added in my game include instructions for play, means for discerning players, the die color selector, and more. I encourage you to take a minute to have a little fun and play one or two rounds, then check out the code afterwards."



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
                        headerLength=""
                        codeRepo=""
                        siteURL=""
                        workDescription=""
                    >
                        <p
                            className={`
                                w-full h-[250px] text-justify
                            `}
                        >
                            {portfolioSiteDescription}
                        </p>
                         <a 
                            href="https://github.com/sophosAnthropos/my-portfolio-site"
                            target="_blank"
                            rel="noopener noreferrer"
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
                        workDescription="" 
                    >
                        <p
                            className={`
                                w-[80%] h-2/3 text-justify text-sky-50
                            `}
                        >
                             {portfolioSiteDescription}
                        </p>
                        <div
                            className={`
                                w-4/5 worksLinksContainer flex justify-evenly items-center
                            `}
                        >
                           <a 
                                href="https://github.com/sophosAnthropos/my-portfolio-site"
                                target="_blank"
                                rel="noopener noreferrer"
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
                        headerLength=""
                        codeRepo="https://github.com/sophosAnthropos/Pig-Game"
                        siteURL="https://sophosanthropos.github.io/Pig-Game/"
                        workDescription={pigGameSiteDescription}
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
                        workDescription={pigGameSiteDescription}
                    >
                    </WorksComponentsDesktop>
            }

        </section>
        
    )
}