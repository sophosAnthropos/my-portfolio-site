import { useState } from "react"
import topBtnImg from "../../assets/Images/Top_Of_Page_Btn_Image.png"

export const BackToTopBtn = () => {

    const [isVisible, setVis] = useState("hidden")
    

    // Keeps the btn hidden when at top of page, cheated by using the DOM, will have to work out how to do this action with hooks and state when I have time.
    window.addEventListener('scroll', () => document.documentElement.scrollTop <= 220 ? setVis('hidden') : setVis('block') ) 


    //Since position of fixed adheres to the viewport, widening the window beyond width of 1920px cause button to move farther off the parent element. Need to find solution or alternative to this problem.
    return (
        <button
            onClick={ () => window.scrollTo({top: 0, behavior: "smooth"}) }
            className={`
                w-[15%] aspect-auto fixed top-3 right-2 ${isVisible}

                sm:backToTopBtnDesktop sm:right-4
            `}
        >
            <img src={topBtnImg} alt=""
                className={`
                    
                `}
            />
        </button>
    )
}