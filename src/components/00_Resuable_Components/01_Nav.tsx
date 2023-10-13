import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/Images/First_Real_Logo.png"
import codingImg from "../../assets/Images/codingImage.png"
import emailImg from "../../assets/Images/emailImage.png"
import githubLogo from "../../assets/Images/GithubLogo.png";
import linkdinLogo from "../../assets/Images/LinkdinLogo.png";
import resumeLogo from "../../assets/Images/ResumeLogo.png";
import myResume from "../../assets/PDF/WebDevResume_2023.pdf";


export const NavBar = ({link2}: {link2:string}): JSX.Element => {
    
    const [hamburgerState, setHamState] = useState(true)
    
    let navItem: string = link2==="/MyWork" ? "MY WORK" : "CONTACTS"

    return (
        <nav
            className={`
                w-full h-[8vh] relative top-0 z-[420]
                flex justify-end

                sm:h-[140px] sm:justify-between sm:items-center
            `}
        >

            <button 
                onClick={()=>{hamburgerState ? setHamState(false) : setHamState(true)}}
                className={`
                    w-[30%] fixed top-[-1%] z-[421]
                    border-r-2 border-b-2 rounded-br-full rounded-bl-full border-orange-500

                    ${hamburgerState ? "h-[60px] left-[-11%]" : "w-full h-[40px] left-0 rounded-br-none rounded-bl-none fa-solid fa-times border-r-0 border-neutral-200"}

                    bg-neutral-50 text-orange-500 text-xl

                    sm:hidden
                `}
            >
                <span
                    className={`
                        fa-solid fa-bars absolute bottom-[30%] right-[30%]
                        ${hamburgerState ? "inline" : "hidden"}
                    `}
                ></span>
            </button>

            <section
                className={`
                    w-full h-[100vh] fixed top-[0]
                    ${hamburgerState ? "hidden" : "block backdrop-blur-[8px] pt-[30px]"}
                    
                    
                    sm:w-[65%] sm:relative sm:h-full sm:flex sm:justify-around sm:items-center
                `}
                onClick={()=>setHamState(true)}
            >

                <Link 
                    to="/"
                    className={`
                        w-full h-[120px]
                        ${hamburgerState ? "hidden" : " flex justify-center items-center bg-neutral-50 border-b-2"}

                        sm:w-[300px] sm:h-full sm:flex sm:justify-center sm:items-center 
                        
                    `} 
                >
                    <img 
                        src={logo} 
                        className={`
                            h-[55%] aspect-auto
                            sm:homeLinkLogoDesktop
                        `}
                    />
                    <h2
                        className={`
                            w-1/3 h-1/2 flex items-center justify-center
                            mainText text-lg

                            sm:text-white sm:homeLinkH2Desktop
                        `}
                    >
                        HOME
                    </h2>
                </Link>

                <Link 
                    to={link2}
                    className={`
                        w-full h-[120px] 
                        
                        ${hamburgerState ? "hidden" : " flex justify-center items-center bg-neutral-50 border-orange-500 border-b-4"}

                        sm:w-[285px] sm:h-full sm:flex sm:justify-center sm:items-center
                                         
                    `} 
                >
                    <img 
                        src={
                            link2==="/MyWork" ? codingImg : emailImg
                        }

                        alt="cartoony depiction of an open laptop displaying multiple lines of bars that vary in width and color representing typed code"

                        className={`
                            ${link2==="/MyWork" ? "h-[55%] sm:navItemImageProjects" : "h-[80%] sm:navItemImageContact"} aspect-auto
                        `}
                    />
                    <h2
                        className={`
                            w-1/3 h-1/2 flex items-center justify-center mainText text-lg
                            sm:navItemH2 sm:text-white
                        `}
                    >
                        {navItem}
                    </h2>
                </Link>

            </section>

            <section
                className={`
                    w-[45%] h-[75%] flex items-center justify-center 
                    sm:linksSectionWrapper sm:h-full sm:items-center
                `}
            >
                <div
                    className={`
                        w-4/5 h-[50%] flex

                        sm:allLinksContainer sm:text-white sm:mainText
                        sm:border-2 sm:border-orange-400 sm:rounded-md sm:border-dashed
                    `}
                >
                    <a 
                        href="https://github.com/sophosAnthropos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            w-1/3 h-full flex justify-center items-center 
                        
                            sm:flex-col sm:linkContainer sm:border-r-2 sm:border-dashed sm:border-orange-400
                        `}
                    >
                        <img 
                            src={githubLogo} 
                            alt=""
                            className={`
                                w-1/2 aspect-square
                                sm:linksLogosDesktop
                            `} 
                        />
                        <p
                            className={`
                                hidden
                                sm:flex sm:items-end sm:h-[30%]
                            `}
                        >
                            GITHUB
                        </p>
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/christopher-krause-534a69255/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            w-1/3 h-full flex justify-center items-center 
                        
                            sm:flex-col sm:linkContainer sm:border-r-2 sm:border-dashed sm:border-orange-400
                        `}
                    >
                        <img 
                            src={linkdinLogo} 
                            alt=""
                            className={`
                                w-1/2 aspect-square
                                sm:linksLogosDesktop
                            `} 
                        />
                        <p
                            className={`
                                hidden
                                sm:flex sm:items-end sm:h-[30%]
                            `}
                        >
                            LINKDIN
                        </p>
                    </a>

                    <a 
                        href={myResume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            w-1/3 h-full flex justify-center items-center 
                        
                            sm:flex-col sm:linkContainer 
                        `}
                    >
                        <img 
                            src={resumeLogo} 
                            alt=""
                            className={`
                                w-1/2 aspect-square
                                sm:linksLogosDesktop
                            `} 
                        />
                        <p
                            className={`
                                hidden
                                sm:flex sm:items-end sm:h-[30%]
                            `}
                        >
                            RESUME
                        </p>
                    </a>
                </div>

            </section>

        </nav>
    )
}