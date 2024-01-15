import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className='App'>
    <UserContextProvider>
    <h>React with  chai </h>
    <Login/>
    <Profile/>
    </UserContextProvider>
    </div>
  );
}

export default App;
