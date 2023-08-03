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
                w-full h-[22%] absolute top-0 bg-none flex justify-between

                sm:h-1/5
            `}
        >
            <section
                className={`
                   w-[55%] h-[70%] flex items-end
                `}
            >
                <Link 
                    to="/"
                    className={`
                        w-[80%] h-3/4 flex justify-center items-end
                    `} 
                >
                    <img 
                        src={logo} 
                        className={`
                            w-[80%] aspect-auto
                        `}
                    />
                </Link>

            </section>


            <section
                className={`
                    w-full h-auto absolute top-[0] flex flex-col items-center
                    ${hamburgerState ? "bg-none" : "bg-neutral-50 bg-opacity-[100] border-b-4 border-orange-500"}
                `}
            >
                <button 
                    onClick={()=>{hamburgerState ? setHamState(false) : setHamState(true)}}
                    className={`
                        w-[17%] h-[30px] border-x-2 border-b-2 rounded-br-full rounded-bl-full border-orange-500
                        ${hamburgerState ? "fa-solid fa-bars" : "fa-solid fa-times border-none"} bg-neutral-50 text-orange-500 text-xl
                    `}
                >
    
                </button>
                <Link 
                    to={link2}
                    className={`
                        w-full h-[100px] flex justify-center items-center
                        ${hamburgerState ? "hidden" : "block"}                     
                    `} 
                >
                    <img 
                        src={link2==="/Projects" ? codingImg : emailImg}
                        alt="cartoony depiction of an open laptop displaying multiple lines of bars that vary in width and color representing typed code"
                        className={`
                            ${link2==="/Projects" ? "h-3/5" : "h-[80%]"} aspect-auto
                        `}
                    />
                    <h2
                        className={`
                            w-1/3 h-1/2 flex items-center justify-center mainText text-lg
                        `}
                    >
                        {navItem}
                    </h2>
                </Link>

            </section>

            <section
                className={`
                    w-[45%] h-[60%] flex items-end justify-center 
                `}
            >
                <div
                    className={`
                        w-4/5 h-[50%] flex border-2 border-orange-400 rounded-md border-dashed
                    `}
                >
                    <a 
                        href="https://github.com/sophosAnthropos"
                        className={`
                            w-1/3 h-full flex justify-center items-center border-r-2 border-dashed border-orange-400 
                        `}
                    >
                        <img 
                            src={githubLogo} 
                            alt=""
                            className={`
                                w-1/2 aspect-square
                            `} 
                        />
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/christopher-krause-534a69255/"
                        className={`
                            w-1/3 h-full flex justify-center items-center border-r-2 border-dashed border-orange-400 
                        `}
                    >
                        <img 
                            src={linkdinLogo} 
                            alt=""
                            className={`
                                w-1/2 aspect-square
                            `} 
                        />
                    </a>

                    <a 
                        href={myResume}
                        className={`
                            w-1/3 h-full flex justify-center items-center 
                        `}
                    >
                        <img 
                            src={resumeLogo} 
                            alt=""
                            className={`
                                w-1/2 aspect-square
                            `} 
                        />
                    </a>
                </div>

            </section>

        </nav>
    )
}