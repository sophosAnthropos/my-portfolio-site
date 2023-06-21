import { Link } from "react-router-dom"
import logo from "../../assets/Images/Placeholder_Logo.png";
import githubLogo from "../../assets/Images/GithubLogo.png";
import linkdinLogo from "../../assets/Images/LinkdinLogo.png";
import resumeLogo from "../../assets/Images/ResumeLogo.png";
import myResume from "../../assets/PDF/WebDevResume_2022.pdf";
import emailImg from "../../assets/Images/emailImage.png"
import codingImg from "../../assets/Images/codingImage.png"

export const Home = (): JSX.Element => {

    return (
        <main
            className={`
                h-[100vmax] bg-portraitBG bg-cover bg-center
            `}
        >
            <section
                className={`
                    h-[33%] flex items-end relative text-3xl techText text-cyan-400
                `}
            >
                <header
                    className={`
                        w-[59%] h-[40%] absolute top-0 left-0
                    `}
                >
                    <h1
                        className={`
                           h-full flex justify-end items-end font-bold
                        `}
                    >
                        CHRISTOPHER
                    </h1>
                </header>
                <div
                    className={`
                        w-full h-[60%] flex justify-center
                    `}
                >
                    <img 
                        src={logo} 
                        alt="Image of a backslash between arrow brackets"
                        className={`
                            w-3/4 h-full
                        `}
                    />
                </div>
                <header
                    className={`
                        w-[39%] h-[40%] absolute top-0 right-0 
                    `}
                >
                    <h1
                        className={`
                             h-full flex justify-start items-end font-bold 
                        `}
                    >
                        KRAUSE
                    </h1>
                </header>
            </section>

            <section
                className={`
                    h-[12%] flex items-start
                `}
            >
                <h2
                    className={`
                        w-full h-2/3 flex items-start justify-center text-2xl techText tracking-widest text-cyan-200
                    `}
                >
                    FRONT END DEVELOPER
                </h2>
            </section>

            <section 
                className={`
                    h-[17%] grid grid-cols-2 justify-items-center place-items-center text-md text-yellow-500 techText tracking-wider
                `}
            >
                <div
                    className={`
                        w-3/5 h-3/5
                    `}
                >
                    <a 
                        href="https://github.com/sophosAnthropos"
                        className={`
                            w-full h-full flex justify-end items-end
                        `}
                    >
                        <img src={githubLogo} className={`w-1/3 h-5/6`} />
                        GITHUB
                    </a>
                </div>
                <div
                    className={`
                        w-3/5 h-3/5
                    `}
                >
                    <a 
                        href="https://www.linkedin.com/in/christopher-krause-534a69255/"
                        className={`
                            w-full h-full flex justify-start items-end
                        `}
                    >
                        <img src={linkdinLogo} className={`w-1/5 h-3/5 mr-2`} />
                        LINKDIN
                    </a>
                </div>
                <div
                    className={`
                        w-[38%] h-3/5 col-span-2
                    `}
                >
                    <a 
                        href={myResume}
                        className={`
                            w-full h-full flex justify-evenly items-center
                        `}
                    >
                        <img src={resumeLogo} className={`w-1/6 h-4/5`} />
                        RESUME/CV
                    </a>
                </div>
            </section>

            <section
                className={`
                    h-[38%] flex justify-around items-center text-2xl text-neutral-950 mainText font-bold
                `}
            >
                <div
                    className={`
                        w-2/5 h-2/3 flex items-end justify-center
                    `}
                >
                    <Link to="/Projects" className={`w-full h-3/4`} >
                        <button
                            className={`
                                w-full h-full flex flex-col items-center justify-center bg-fuchsia-500 bg-opacity-40 rounded-xl border-2 border-violet-950 text-violet-950
                            `}
                        >
                            <p
                                className={`
                                    w-full h-1/3 backdrop-blur-[2px] flex justify-center items-center rounded-xl
                                `}
                            >
                                Projects
                            </p>
                            <img 
                                src={codingImg} 
                                className={`
                                    w-2/3 h-1/2
                                `}
                            />
                        </button>
                    </Link>
                </div>
                <div
                    className={`
                        w-2/5 h-2/3 flex items-end justify-center
                    `}
                >
                    <Link to="/Contact" className={`w-full h-3/4`} >
                        <button
                            className={`
                                w-full h-full flex items-center bg-orange-500 bg-opacity-70 border-2 border-violet-950 rounded-xl text-violet-950
                            `}
                        >
                            <p
                                className={`
                                    w-3/5 h-full backdrop-blur-[2px] flex justify-center items-center rounded-xl 
                                `}
                            >
                                Contact
                            </p>
                            <img 
                                src={emailImg} 
                                className={`
                                    w-2/5
                                `}
                            />
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    )
}