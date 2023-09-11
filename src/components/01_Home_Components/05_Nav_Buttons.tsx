import { Link } from "react-router-dom"
import emailImg from "../../assets/Images/emailImage.png"
import codingImg from "../../assets/Images/codingImage.png"

export const NavButtons = (): JSX.Element => {

    return (
        <section
                    className={`
                        h-[30%] flex justify-around items-center text-2xl text-neutral-950 mainText font-bold

                        sm:navContainerDesktop sm:navBtnTextDesktop sm:justify-evenly
                    `}
                >
                    <div
                        className={`
                            w-2/5 h-4/5 flex items-center justify-center

                            sm:navBtnContainerDesktop
                        `}
                    >
                        <Link 
                            to="/MyWork" 
                            className={`
                                w-full h-3/4

                                sm:h-5/6
                            `} 
                        >
                            <button
                                className={`
                                    w-full h-full flex flex-col items-center justify-center bg-fuchsia-500 bg-opacity-30 rounded-xl border-2 border-violet-950 text-violet-950 backdrop-blur-[2px]

                                    sm:flex-row
                                `}
                            >
                                <p
                                    className={`
                                        w-full h-1/3 flex justify-center items-center rounded-xl

                                        sm:w-2/5
                                    `}
                                >
                                    My Work
                                </p>
                                <img 
                                    src={codingImg} 
                                    className={`
                                        h-1/2

                                        sm:navBtnProjectImgDesktop
                                    `}
                                />
                            </button>
                        </Link>
                    </div>


                    <div
                        className={`
                            w-2/5 h-4/5 flex items-center justify-center

                            sm:navBtnContainerDesktop
                        `}
                    >
                        <Link 
                            to="/Contact" 
                            className={`
                                w-full h-3/4

                                sm:h-5/6
                            `} 
                        >
                            <button
                                className={`
                                    w-full h-full flex flex-col items-center justify-center bg-orange-500 bg-opacity-60 border-2 border-violet-950 rounded-xl text-violet-950 backdrop-blur-[2px]

                                    sm:flex-row
                                `}
                            >
                                <p
                                    className={`
                                        w-3/5 h-1/3 flex justify-center items-center rounded-xl

                                        sm:w-2/5
                                    `}
                                >
                                    Contact
                                </p>
                                <img 
                                    src={emailImg} 
                                    className={`
                                        h-1/2

                                        sm:navBtnContactImgDesktop
                                    `}
                                />
                            </button>
                        </Link>
                    </div>
                </section>
    )

}