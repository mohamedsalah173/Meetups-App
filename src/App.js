import { Route, Routes } from 'react-router-dom';
import NewMeetup from './pages/NewMeetup'
import AllMeetups from './pages/AllMeetups'
import Favorites from './pages/Favorites'
import MainNavigation from './components/layout/MainNavigation';
function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route exact path="/" element={<AllMeetups/>}/>
        <Route exact path="/favorites" element={<Favorites/>}/>
        <Route exact path="/new-meet" element={<NewMeetup/>}/>
      </Routes>
    </div>
  );
}

export default App;
