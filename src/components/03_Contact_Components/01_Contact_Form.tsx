import emailjs from '@emailjs/browser';

export const TheForm = () => {

    

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        emailjs.sendForm('service_oe5ds3f', 'template_w6z6qkd', e.currentTarget, 'N7mmqqtzIxsv5zVEO')
          .then((result) => {
              console.log(result.text);
              alert("Message Sent")
            }, (error) => {
              console.log(error.text);
              alert("Message failed to send")
          });

          e.currentTarget.reset()
      };


    return (
        <form onSubmit={sendEmail}
            className={`
                w-full h-[92%] relative
                grid grid-cols-1 justify-items-center
                techText

                sm:w-[70%] sm:h-[80%] 
                sm:bg-gray-400 sm:bg-opacity-10 
                sm:border-4 sm:border-gray-500 sm:rounded-3xl 
                sm:grid-rows-4 sm:grid-cols-4 sm:place-items-center
            `}
        >
            
            <input type="text" placeholder="First Name*" name="first_name"   required
                className={`
                    allInputFields
                    placeholder:inputPlaceholderRequiredColor 
                    firstFourInputs
                `}
            />

            <input type="text" placeholder="Last Name" name="last_name" 
                className={`
                    allInputFields
                    placeholder:inputPlaceholderColorEffect 
                    firstFourInputs
                `}
            />

            <input type="phone" placeholder="Phone" name="sender_phone" 
                className={`
                    allInputFields
                    placeholder:inputPlaceholderColorEffect
                    firstFourInputs
                `}
            />

            <input type="email" placeholder="Email*" name="sender_email"  required 
                className={`
                    allInputFields
                    placeholder:inputPlaceholderRequiredColor 
                    firstFourInputs
                `}
            />

            <textarea placeholder="Your Message*" name="message"  required
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
                    border-2 border-cyan-300
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