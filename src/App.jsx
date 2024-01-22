import NavbarWeb from '../components/NavbarWeb.jsx'
import FaqWeb from '../components/FaqWeb.jsx'

import { Routes ,Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import KelasPage from './pages/KelasPage.jsx';
import TestimonialPage from './pages/TestimonialPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import SyarkenPage from './pages/SyarkenPage.jsx';

function App(){
  return(
    <div>
      <NavbarWeb />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyarkenPage} />
      </Routes>
      <FaqWeb />
    </div>
    )
}

export default App