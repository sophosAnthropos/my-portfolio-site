import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/01_Home';
import { Projects } from './Pages/02_Project';
import { Contact } from './Pages/03_Contact';



export const App = (): JSX.Element => {
  return (
    <div
        className={`
            bg-gradient-to-tr from-yellow-600 to-violet-600
        `}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}
