import logo from "../../../assets/Images/First_Real_Logo.png";

export const NameAndLogoDesktop = (): JSX.Element => {

    return (
        <section
            className={`
                w-full h-[75%] flex items-center justify-around techText text-cyan-400 nameTextDesktop
            `}
        >
            <header
                className={`
                    w-1/3 h-3/5
                `}
            >
                <h1
                    className={`
                        h-full flex justify-end items-center font-bold
                    `}
                >
                    CHRISTOPHER
                </h1>
            </header>


            <div
                className={`
                    w-[350px] flex justify-center items-center px-[15px]
                `}
            >
                <img 
                    src={logo} 
                    alt="Image of a backslash between arrow brackets"
                    className={`
                        logoDesktop
                    `}
                />
            </div>


            <header
                className={`
                    w-1/3 h-3/5 relative
                `}
            >
                <h1
                    className={`
                            h-full flex justify-start items-center font-bold
                    `}
                >
                    KRAUSE
                </h1>
            </header>


        </section>
    )

}