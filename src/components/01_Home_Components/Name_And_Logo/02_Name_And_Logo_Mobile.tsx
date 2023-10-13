import logo from "../../../assets/Images/First_Real_Logo.png";

export const NameAndLogoMobile = (): JSX.Element => {

    return (
        <section
            className={`
                w-full h-[70%] flex items-end relative text-3xl techText text-cyan-400
            `}
        >
            <header
                className={`
                    w-full h-[40%] flex justify-center absolute top-0 left-0
                `}
            >
                <h1
                    className={`
                       w-full h-full flex justify-center items-end font-bold

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