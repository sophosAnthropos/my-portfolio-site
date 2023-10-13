

export const MobileWorksComponent = (
    {worksName, desktopImage, mobileImage, headerLength, children, codeRepo, siteURL, workDescription}: 
    {
        worksName: string, 
        desktopImage: string, 
        mobileImage: string, 
        headerLength: string, 
        children: JSX.Element[],
        codeRepo: string,
        siteURL: string,
        workDescription: string
    }
):JSX.Element => {

    return (
        <article
                className={`
                    w-full h-auto mb-14
                `}
            >
                <header
                    className={`
                        w-full h-auto
                    `}
                >
                    <h3
                        className={`
                            w-full h-[50px] flex justify-start items-center ml-2
                            techText font-bold text-sky-50 ${headerLength === "long" ? "text-xl" : "text-2xl"}
                        `}
                    >
                        {worksName}
                    </h3>
                </header>
                <main
                    className={`
                        w-full h-auto flex flex-col items-center
                    `}
                >
                    <div
                        className={`
                            w-3/4 relative flex justify-center my-3
                        `}
                    >
                        <img 
                            src={desktopImage} 
                            alt="" 
                            className={`
                                w-3/4 aspect-auto
                            `}
                        />
                        <img 
                            src={mobileImage} 
                            alt="" 
                            className={`
                                w-1/6 aspect-auto absolute top-[43%] right-[8%]
                            `}
                        />
                    </div>
                    <div
                        className={`
                            w-full px-3 my-3 mainText text-sky-50 flex flex-col items-center tracking-wide
                        `}
                    >
                        {worksName === "CK Dev" ? children :
                            <>
                                <p
                                    className={`
                                        w-full h-auto pb-[20px]
                                    `}
                                >
                                    {workDescription}
                                </p>
                                <div
                                    className={`
                                        w-full h-[50px] flex justify-evenly
                                    `}
                                >
                                    <a 
                                        href={codeRepo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            w-[45%] h-full flex justify-center items-center
                                            text-orange-600 bg-neutral-700 tracking-wide font-bold 
                                            border-2 rounded-lg 
                                        `}
                                    >VIEW CODE</a>
                                    <a 
                                        href={siteURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            w-[45%] h-full flex justify-center items-center
                                            text-sky-400 bg-neutral-700 tracking-wide font-bold 
                                            border-2 rounded-lg
                                        `}
                                    >VISIT SITE</a>
                                </div>
                            </>
                        }
                    </div>
                </main>
            </article>
    )
}