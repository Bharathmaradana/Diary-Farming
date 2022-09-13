
import './App.css';
import Heading from './component/Heading';
import Body from './component/Body';
import Profile from './component/Profile';
import DashBoard from './component/DashBoard';
import Orders from './component/Orders';
import Footer from './component/Footer';
import Reports from './component/Reports';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Registration from './component/Registration';


function App() {
  return (
   <div>
     <Router>
 
 <Routes>
            <Route path="/" element={<Heading /> } />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/Registration" element = {<Registration />} />
            <Route path="/Orders" element ={<Orders/>} />
            <Route path="/Profile" element={<Profile/>} />
           <Route path="/Reports" element={<Reports/>}/>
        </Routes>

      
 </Router>
   </div>
  
  );
}

export default App;
