import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/Images/Placeholder_Logo_V2.png"
import codingImg from "../../assets/Images/codingImage.png"
import emailImg from "../../assets/Images/emailImage.png"
import githubLogo from "../../assets/Images/GithubLogo.png";
import linkdinLogo from "../../assets/Images/LinkdinLogo.png";
import resumeLogo from "../../assets/Images/ResumeLogo.png";
import myResume from "../../assets/PDF/WebDevResume_2022.pdf";


export const NavBar = ({link2}: {link2:string}): JSX.Element => {
    
    const [hamburgerState, setHamState] = useState(true)
    
    let navItem: string = link2==="/Projects" ? "PROJECTS" : "CONTACTS"

    return (
        <nav
            className={`
                w-full navBarHeightMobile absolute top-0 z-[420]
                flex justify-between items-end

                sm:h-[16%] sm:items-center
            `}
        >
            <section
                className={`
                   w-[55%] h-[70%] flex items-end
                   sm:homeLinkContainerDesktop sm:h-full sm:justify-center
                `}
            >
                <Link 
                    to="/"
                    className={`
                        w-[80%] h-3/4 flex justify-center items-end
                        sm:homeLinkLogoDesktop sm:h-full sm:items-center
                        
                    `} 
                >
                    <img 
                        src={logo} 
                        className={`
                            w-[80%] aspect-auto
                            sm:w-full
                        `}
                    />
                </Link>

            </section>

            <button 
                onClick={()=>{hamburgerState ? setHamState(false) : setHamState(true)}}
                className={`
                    w-[17%] h-[30px] absolute top-0 z-[421]
                    border-x-2 border-b-2 rounded-br-full rounded-bl-full border-orange-500

                    ${hamburgerState ? "left-[41%] fa-solid fa-bars" : "w-full left-0 rounded-br-none rounded-bl-none fa-solid fa-times border-none"}

                    bg-neutral-50 text-orange-500 text-xl

                    sm:hidden
                `}
            >
            </button>

            <section
                className={`
                    w-full h-[100vh] absolute top-[0]
                    ${hamburgerState ? "hidden" : "block backdrop-blur-[8px] pt-[30px]"}
                    
                    
                    sm:relative sm:w-[420px] sm:h-full sm:flex sm:justify-center sm:items-center
                `}
            >
                <Link 
                    to={link2}
                    className={`
                        w-full h-[120px] 
                        
                        ${hamburgerState ? "hidden" : " flex justify-center items-center bg-neutral-50 border-orange-500 border-b-4"}

                        sm:w-[90%] sm:h-1/2 sm:flex sm:justify-center sm:items-center
                                         
                    `} 
                >
                    <img 
                        src={
                            link2==="/Projects" ? codingImg : emailImg
                        }

                        alt="cartoony depiction of an open laptop displaying multiple lines of bars that vary in width and color representing typed code"

                        className={`
                            ${link2==="/Projects" ? "h-[55%] sm:navItemImageProjects" : "h-[80%] sm:navItemImageContact"} aspect-auto
                        `}
                    />
                    <h2
                        className={`
                            w-1/3 h-1/2 flex items-center justify-center mainText text-lg
                            sm:w-[35%] sm:navItemText sm:text-white
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