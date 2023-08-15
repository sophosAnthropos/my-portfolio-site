import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useWindowResize } from '../hooks/Window_Resize_Hook';
import { Home } from './Pages/01_Home';
import { Projects } from './Pages/02_Project';
import { Contact } from './Pages/03_Contact';
import backgroundMobile from '../assets/Images/00_backgroundPortrait_V2.png'
import backgroundDesktop from '../assets/Images/backgroundLandscape_V2.png'


export const App = (): JSX.Element => {

    const {width, } = useWindowResize()
    const [background, setBackground] = useState(<></>)
  

    useEffect(() => {
        if (width < 640) {
            setBackground(() => 
                <img 
                    src={backgroundMobile} 
                    alt="" 
                    className={`
                        w-full h-full absolute z-[310]
                    `}
                />
            )
        }
        else {
            setBackground(() => 
                <img 
                    src={backgroundDesktop} 
                    alt="" 
                    className={`
                        w-full h-full absolute z-[310]
                    `}
                />
            )
        }
    }, [width])



    return (
        <div
            className={`
                w-full bg-gradient-to-tr from-yellow-600 to-violet-600 relative z-[300]
                sm:appContainerDesktop
            `}
        >
            {background}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Projects' element={<Projects />} />
              <Route path='/Contact' element={<Contact />} />
            </Routes>

            <footer
                className={`
                    w-full h-[3.5%] absolute bottom-0 z-[420] 
                    bg-neutral-800

                    sm:h-[4%]
                    
                `}
            >
                <h3
                    className={`
                        w-full h-full text-xs flex justify-center items-center text-cyan-300

                        sm:text-base
                    `}
                >
                    This site is a Christopher Krause original &#169;
                </h3>
            </footer>
        </div>
    )
}
