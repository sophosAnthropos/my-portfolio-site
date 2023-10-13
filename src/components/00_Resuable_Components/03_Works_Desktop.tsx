


export const WorksComponentsDesktop = ({
    children, 
    worksName, 
    desktopImage, 
    mobileImage, 
    lastChild, 
    codeRepo, 
    siteURL, 
    workDescription 

}: {
    children: JSX.Element[], 
    worksName: string, 
    desktopImage: string, 
    mobileImage: string, 
    lastChild: boolean,
    codeRepo: string,
    siteURL: string,
    workDescription: string

}):JSX.Element => {
    
    return (
        <article
            className={`
                ${worksName === "CK Dev" ? "worksContainerShort" : "worksContainerLong"} 
                flex items-center justify-center mt-8
                ${lastChild ? 'border-b-none' : 'border-b-4'}
            `}
        >
            <div
                className={`
                    projectImageContainer h-[382px] relative

                `}
            >
                <img 
                    src={desktopImage} alt="" 
                    className={`
                        w-full absolute top-[5%]
                    `}
                />
                <img 
                    src={mobileImage} alt="" 
                    className={`
                        w-1/4 absolute bottom-[10%] right-[-8%]
                    `}
                />
            </div>
            <main
                className={`
                    w-2/3 h-full flex flex-col justify-center
                `}
            >
                <header
                    className={`
                        w-full h-[15%] flex justify-center
                    `}
                >
                    <h3
                        className={`
                            w-full flex justify-center items-center techText text-2xl font-bold text-sky-50
                        `}
                    >
                        {worksName}    
                    </h3>
                </header>
                <section
                    className={`
                        w-full h-3/4 flex flex-col items-center justify-evenly mainText text-lg

                    `}
                >
                    {worksName === "CK Dev" ? children :
                        <>
                            <p
                                className={`
                                    w-[80%] h-3/4 text-justify px-4 text-sky-50 tracking-wide
                                `}
                            >
                                {workDescription}
                            </p>


                            <div
                                className={`
                                    w-4/5 worksLinksContainer flex justify-evenly items-center
                                `}
                            >


                                <a 
                                    href={codeRepo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        w-2/5 h-3/4 flex justify-center items-center
                                        text-orange-500 tracking-wide font-bold
                                        bg-neutral-700 border-2 rounded-lg 
                                    `}
                                >VIEW CODE</a>


                                <a 
                                    href={siteURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        w-2/5 h-3/4 flex justify-center items-center
                                        text-sky-400 tracking-wide font-bold
                                        bg-neutral-700 border-2 rounded-lg
                                    `}
                                >THE WEBSITE</a>



                            </div> 
                        </>
                    }
                </section>
            </main>
        </article>
    )
}