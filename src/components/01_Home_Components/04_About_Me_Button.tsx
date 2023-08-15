import openAboutMeDesktop from "../../assets/Images/about_Me_Tab_V4_Desktop.png"
import { useContext } from "react"
import { AboutMeStateContext } from "../../context/01_About_Me_State"

export const OpenAboutMeBtn = () => {
    const [, setAboutState] = useContext(AboutMeStateContext)
    return (
        <button
            onClick={()=>setAboutState(true)}
            className={`
                w-[85px] h-[105px] absolute top-[35%] right-0 z-[410]
                sm:w-[140px] sm:h-[18%] sm:top-[15%]
            `}
        >
            <img 
                src={openAboutMeDesktop}
                className={`
                    w-full h-full
                `}
            />
        </button>
    )
}