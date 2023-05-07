import { Route, Routes } from 'react-router-dom';
import NewMeetup from './pages/NewMeetup'
import AllMeetups from './pages/AllMeetups'
import Favorites from './pages/Favorites'
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetups/>}/>
        <Route exact path="/favorites" element={<Favorites/>}/>
        <Route exact path="/new-meet" element={<NewMeetup/>}/>
      </Routes>
      </Layout>
  );
}

export default App;
