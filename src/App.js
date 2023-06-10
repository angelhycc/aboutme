// import logo from './logo.svg';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import GamePage from './components/Game';


function App() {
  console.log('load')
  return (
    <>
    <Routes>
    {/* <Route path='test' element={<LandingPage/>}/> */}
    <Route path='/' element={<Layout/>} >
      <Route index element={<Home />} />
      <Route path='about' element={<About />}/>
      {/* <Route path='game' element={<GamePage/>}/> */}
      <Route path='contact' element={<Contact/>}/>
    </Route>
    </Routes>
    </>
  );
}

export default App;
