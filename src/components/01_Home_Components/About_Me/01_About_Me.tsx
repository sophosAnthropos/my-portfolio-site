import { useContext } from "react";
import closeAboutMe from "../../../assets/Images/close_About_Me_Tab_V2.png"
import { AboutMeContent } from "./02_About_Me_Content";
import { AboutMeStateContext } from "../../../context/01_About_Me_State";
import picOfMe from "../../../assets/Images/imageOfMe_V2.png" 

export const AboutMe = (): JSX.Element => {
    const [isOpen, setAboutState] = useContext(AboutMeStateContext)

    return (
        <div
            className={`
                w-full h-full absolute z-[500] ${isOpen ? "block" : "hidden"}  
                sm:backdrop-blur-[6px]
                
            `}
        >
            <aside 
                className={`
                    w-full h-full absolute z-[505] overflow-hidden
                    flex flex-col justify-end bg-yellow-500         

                    sm:aboutMeSectionDesktop sm:right-0
                `}
            >
                <img 
                    src={picOfMe} 
                    className={`
                         h-[35%] absolute z-[505] top-0 left-[5%]
                    `}
                />
                <section
                    className={`
                        h-1/3 flex items-end techText text-3xl relative z-[510]
                    `}
                >
                    <h2
                        className={`
                            w-full h-1/3 flex justify-center items-center bg-red-700 text-red-50
                        `}
                    >
                        ABOUT CHRISTOPHER
                    </h2>
                </section>

                <AboutMeContent />

                <button
                    onClick={()=>setAboutState(false)}
                    className={`
                        w-[8%] aspect-square absolute z-[511] top-[1%] right-[1%]
                    `}
                >
                    <img 
                        src={closeAboutMe}
                        className={`
                            w-full h-full
                        `}

                    />
                </button>

            </aside>

        </div>
        
    )
}