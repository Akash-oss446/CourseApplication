import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Display from './Display';
import {Routes,Route} from 'react-router-dom';
import DisplayInstances from './DisplayInstances';
import SaveCourse from './SaveCourse';
import CreateInstances from './CreateInstances';
import Navbar from './Navbar';
import Footer from './Footer';
function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/save' element={<SaveCourse />}></Route>
      <Route path='/display' element={<Display />}></Route>
      <Route path='/dispinstances' element={<DisplayInstances />}></Route>
      <Route path='/createinstances' element={<CreateInstances />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
