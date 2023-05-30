import './Styles/App.css'
import MainContainer from './Components/Layout/MainContainer';
import Login from './Components/Auth/Login';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Components/Layout/Welcome';
import Chatbar from './Components/Layout/ChatBar';
import Users from './Components/Users';
import Groups from './Components/Groups';
import CreateGroups from './Pages/CreateGroups';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='inbox' element={<MainContainer />} >
          <Route path='welcome' element={<Welcome />} />
          <Route path='chatroom' element={<Chatbar props={{
            name: 'Test#1',
            timestamp: "today"
          }} />} />
          <Route path='users' element={<Users />} />
          <Route path='groups' element={<Groups />} />
          <Route path='create-group' element={<CreateGroups />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
