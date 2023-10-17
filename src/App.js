
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import NavigationBar from './components/NavigationBar';
import CreateAds from './Pages/CreateAds';
import MediaAd from './components/Forms/MediaAd';
import TextAd from './components/Forms/TextAd';


function App() {
  return (
    <div className="App">
     <Router>

     <NavigationBar/>
      <Routes>
        <Route path ='/' element={<Dashboard/>}/>
     <Route path='/CreateAd' element={<CreateAds/>}/>
     <Route path='/MediaAd' element={<MediaAd/>}/>
     <Route path='/TextAd' element={<TextAd/>}/>
      </Routes>
     </Router> 

    </div>
  );
}

export default App;
