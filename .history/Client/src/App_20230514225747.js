import './Styles/App.css'
import MainContainer from './Components/Layout/MainContainer';
import Login from './Components/Auth/Login';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Components/Layout/Welcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='inbox' element={<MainContainer />} >
          <Route path='welcome' element={<Welcome />}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
