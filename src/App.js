import Home from './pages/Home';
import ManualTesting from './pages/Manualtesting';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/Signup';
import Careersuggestions from './pages/careersuggestions';
function App(){
  return(
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/manualtesting" element={<ManualTesting />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/careersuggestions' element={<Careersuggestions/>}/>
      </Routes>
     </Router>
  );
}
export default App;