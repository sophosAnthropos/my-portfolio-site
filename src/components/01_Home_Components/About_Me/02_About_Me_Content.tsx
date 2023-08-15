export const AboutMeContent = (): JSX.Element => {

    return (
        <section
            className={`
                h-[55%] flex flex-col items-center justify-center
                mainText aboutMeTextMobile leading-6 tracking-wide 
                relative z-[510]

                sm:text-lg sm:leading-[1.6rem]
            `}
        >
            <p
                className={`
                    w-full aboutMeParagraphMobile pt-2 px-5

                    sm:w-4/5 sm:h-[45%] sm:pt-5 sm:px-5
                `}
            >
                My journey to become a software dev began two years ago, & I'm now a self taught Front End Web Developer. Having achieved proficiency in the front end, I have begun learning back end development to expand my repertoire. My hunger for knowledge is insatiable, & soon my fingers will be in all the programming pies. 
            </p>
            <p
                className={`
                    w-full aboutMeParagraphMobile px-5

                    sm:w-4/5 sm:h-[50%] sm:pb-5 sm:px-5
                `}
            >
                If you seek a valuable teammate look no further. I may be self taught, but I believe that no person is an island. During my time as analytical chemist I came to understand the value of team. Working with substances that continuously risked our wellbeing, bestowed upon me a strong foundation in clear & coherent communication. 
            </p>
        </section>
    )
}