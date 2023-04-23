import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './pages/About/About';
import {Route,Routes} from "react-router-dom"
import Home from './pages/home/Home';
import Field from './pages/Field/Field';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
  return (
    <div className='appjs'>
    <Navbar/>
    <ScrollToTop/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/field' element={<Field/>}/>
    </Routes>
    </div>
   
  );
}

export default App;
