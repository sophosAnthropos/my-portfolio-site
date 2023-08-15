import logo from "../../../assets/Images/Placeholder_Logo_V2.png";

export const NameAndLogoMobile = (): JSX.Element => {

    return (
        <section
            className={`
                h-[70%] flex items-end relative text-3xl techText text-cyan-400
            `}
        >
            <header
                className={`
                    w-full h-[40%] flex justify-center absolute top-0 left-0
                `}
            >
                <h1
                    className={`
                        h-full flex justify-end items-end font-bold

                    `}
                >
                    CHRISTOPHER KRAUSE
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
                        w-[100vwin]
                    `}
                />
            </div>


        </section>
    )

}