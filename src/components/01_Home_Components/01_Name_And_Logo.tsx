import logo from "../../assets/Images/Placeholder_Logo_V2.png";

export const NameAndLogo = (): JSX.Element => {

    return (
        <section
            className={`
                h-[33%] flex items-end relative text-3xl techText text-cyan-400

                sm:items-center sm:nameTextDesktop sm:justify-center
            `}
        >
            <header
                className={`
                    w-[59%] h-[40%] absolute top-0 left-0 

                    sm:w-1/3 sm:h-3/5  sm:relative
                `}
            >
                <h1
                    className={`
                        h-full flex justify-end items-end font-bold

                        sm:items-center

                    `}
                >
                    CHRISTOPHER
                </h1>
            </header>


            <div
                className={`
                    w-full h-[60%] flex justify-center 
                    
                    sm:logoContainerDesktop sm:items-center
                `}
            >
                <img 
                    src={logo} 
                    alt="Image of a backslash between arrow brackets"
                    className={`
                        w-[100vwin]

                        sm:logoDesktop
                    `}
                />
            </div>


            <header
                className={`
                    w-[39%] h-[40%] absolute top-0 right-0 
                    
                    sm:w-1/3 sm:h-3/5 sm:relative
                `}
            >
                <h1
                    className={`
                            h-full flex justify-start items-end font-bold
                            
                            sm:items-center
                    `}
                >
                    KRAUSE
                </h1>
            </header>
        </section>
    )

}