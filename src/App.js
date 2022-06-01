import { Link, NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='navigation'>
        <NavLink
        style={({isActive}) => {return {color: isActive ? 'Red' : ''}}}
        className='nav-bar' to='./UserTable'>User</NavLink> {' '} 
        <NavLink
        style={({isActive}) => {return {color: isActive ? 'Red' : ''}}}
        className='nav-bar' to='./CreateUser'>CreateUser</NavLink>
    </nav>
    <Outlet />
    </div>
  );
}

export default App;
