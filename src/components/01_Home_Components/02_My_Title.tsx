export const MyTitle = (): JSX.Element => {

    return (
        <section
            className={`
                w-full h-[25%] flex items-center
            `}
        >
            <h2
                className={`
                    w-full h-2/3 flex items-start justify-center text-2xl techText tracking-widest text-cyan-200

                    sm:titleTextDesktop
                `}
            >
                FRONT END DEVELOPER
            </h2>
        </section>
    )
}