


export const WorksComponentsDesktop = ({children, worksName, desktopImage, mobileImage, lastChild, codeRepo, siteURL }: {
    children: JSX.Element[], 
    worksName: string, 
    desktopImage: string, 
    mobileImage: string, 
    lastChild: boolean,
    codeRepo: string,
    siteURL: string
}):JSX.Element => {
    
    return (
        <article
            className={`
                projectContainer h-[500px] flex items-center justify-center mt-8 
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
                    w-2/3 h-[400px] flex flex-col justify-center
                `}
            >
                <header
                    className={`
                        w-full h-1/6 flex justify-center 
                    `}
                >
                    <h3
                        className={`
                            w-1/2 flex justify-center items-center techText text-2xl font-bold text-sky-50
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
                                    w-[80%] h-2/3 text-justify px-4 text-sky-50
                                `}
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quia optio tempora at sunt excepturi dolorum illum ipsam commodi. Nemo pariatur molestias soluta? Recusandae similique consequuntur sequi unde? Corporis, veritatis!
                            </p>
                            <div
                                className={`
                                    w-4/5 h-1/4 flex justify-evenly items-center
                                `}
                            >
                                <a 
                                        href={codeRepo}
                                        className={`
                                            w-2/5 h-3/4 flex justify-center items-center
                                            text-orange-500 tracking-wide font-bold
                                            bg-neutral-700 border-2 rounded-lg 
                                        `}
                                    >VIEW CODE</a>
                                <a 
                                        href={siteURL}
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