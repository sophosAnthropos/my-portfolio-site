

export const TheForm = () => {

    return (
        <form
            className={`
                w-full h-4/5 relative
                grid grid-cols-1 justify-items-center
                techText

                sm:w-[70%] sm:h-[80%] 
                sm:bg-gray-400 sm:bg-opacity-10 
                sm:border-4 sm:border-gray-500 sm:rounded-3xl 
                sm:grid-rows-4 sm:grid-cols-4 sm:place-items-center
            `}
        >
            
            <input type="text" placeholder="First Name*" required
                className={`
                    allInputFields
                    placeholder:inputPlaceholderRequiredColor 
                    firstFourInputs
                `}
            />

            <input type="text" placeholder="Last Name"
                className={`
                    allInputFields
                    placeholder:inputPlaceholderColorEffect 
                    firstFourInputs
                `}
            />

            <input type="phone" placeholder="Phone" 
                className={`
                    allInputFields
                    placeholder:inputPlaceholderColorEffect
                    firstFourInputs
                `}
            />

            <input type="email" placeholder="Email*" required
                className={`
                    allInputFields
                    placeholder:inputPlaceholderRequiredColor 
                    firstFourInputs
                `}
            />

            <textarea placeholder="Your Message*" required
                className={`
                    allInputFields
                    placeholder:inputPlaceholderRequiredColor 
                    h-[95%] row-span-2 border-l-[2px] pl-2

                    sm:w-[80%] sm:h-[80%] 
                    sm:col-span-3
                    sm:pt-2 sm:textAreaInputSizeDesktop
                `}
            />

            <button type="submit"
                className={`
                    w-full h-full row-span-1
                    bg-gray-600 bg-opacity-40 
                    text-xl text-cyan-300
                    border-y-2 border-cyan-300
                    transition ease-linear submitButtonActiveEffect duration-[10ms]
                    
                    sm:formSubmitBtn sm:col-span-1 sm:row-span-2 
                    sm:tracking-widest 
                `}
            >
                <p
                    className={`
                        w-full h-full backdrop-blur-md flex justify-center items-center
                    `}
                >
                    SEND
                </p>
            </button>

            <div
                className={`
                     absolute top-[-6%] right-[5%] 
                     inputPlaceholderRequiredColor font-bold

                    sm:formLegendWrapper sm:h-[10%] sm:top-[-5%] sm:left-[7%]
                    sm:flex sm:justify-center sm:items-center
                    sm:bg-neutral-700
                    sm:border-4 sm:border-gray-500 sm:rounded-xl
                    sm:font-bold
                    
                `}
            >
                <p>* = required</p>
            </div>

        </form>
    )
}