import githubLogo from "../../assets/Images/GithubLogo.png";
import linkdinLogo from "../../assets/Images/LinkdinLogo.png";
import resumeLogo from "../../assets/Images/ResumeLogo.png";
import myResume from "../../assets/PDF/WebDevResume_2022.pdf";

export const ImportantLinks = (): JSX.Element => {

    return (
        <section 
            className={`
                h-[17%] grid grid-cols-2 justify-items-center place-items-center text-md text-yellow-500 techText tracking-wider

                sm:flex sm:justify-center sm:items-center sm:linksTextDesktop
            `}
        >
            <div
                className={`
                    w-3/5 h-3/5
                    
                    sm:linksContainerDesktop
                `}
            >
                <a 
                    href="https://github.com/sophosAnthropos"
                    className={`
                        w-full h-full flex justify-evenly items-center

                        sm:justify-center
                    `}
                >
                    <img 
                        src={githubLogo} 
                        className={`
                            w-[23%]

                            sm:githubLogoDesktop sm:mr-[10px]
                        `} 
                    />
                    GITHUB
                </a>
            </div>
            <div
                className={`
                    w-3/5 h-3/5

                    sm:linksContainerDesktop
                `}
            >
                <a 
                    href="https://www.linkedin.com/in/christopher-krause-534a69255/"
                    className={`
                        w-full h-full flex justify-evenly items-center

                        sm:justify-center
                    `}
                >
                    <img 
                        src={linkdinLogo} 
                        className={`
                            w-[21%]

                            sm:linkdinLogoDesktop sm:mr-[10px]
                        `} 
                    />
                    LINKDIN
                </a>
            </div>
            <div
                className={`
                    w-[38%] h-3/5 col-span-2
                    sm:linksContainerDesktop
                `}
            >
                <a 
                    href={myResume}
                    className={`
                        w-full h-full flex justify-evenly items-center

                        sm:justify-center
                    `}
                >
                    <img 
                        src={resumeLogo} 
                        className={`
                            w-[16%] 

                            sm:resumeLogoDesktop sm:mr-[10px]
                        `} 
                    />
                    RESUME/CV
                </a>
            </div>
        </section>
    )
}