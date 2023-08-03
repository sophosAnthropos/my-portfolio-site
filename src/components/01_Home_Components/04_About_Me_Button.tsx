import openAboutMe from "../../assets/Images/about_Me_Tab_V4.png"
import { useContext } from "react"
import { AboutMeStateContext } from "../../context/01_About_Me_State"

export const OpenAboutMeBtn = () => {
    const [, setAboutState] = useContext(AboutMeStateContext)
    return (
        <button
            onClick={()=>setAboutState(true)}
            className={`
                w-[22%] h-[15%] absolute left-0 top-[55%]
                sm:w-[9%] sm:h-[18%] sm:top-[75%]
            `}
        >
            <img 
                src={openAboutMe}
                className={`
                    w-full h-full
                `}
            />
        </button>
    )
}