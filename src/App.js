import { NavLink, Outlet, Route, Routes } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import Expenses from './Components/Expenses';
import Invoices from './Components/Invoices';
import './App.css';

//*Use <Route children> rather than <Router component> and <Router render>
//*Replace all <Switch> elements to <Routes>
//*All <Route>s and <Link>s inside <Routes> are relative making the code leaner
//*Routes are chosen based on the best match rather than traversal order(like Switch)
//*<Routes> allow nesting of Routes in one place 

function App() {
    return (
        <div className="App">
            <div className='header'>
                {/*
                    //* className and activeClassName deprecated
                    //* Use isActive attr to style links
                */}
                <span className='app-title'>React Router v6</span>
                <NavLink 
                    className = {({isActive}) => isActive ? 'active nav-link' : 'nav-link'}
                    to = '/'
                >
                    Home
                </NavLink>
                <NavLink className = {({isActive}) => isActive ? 'active nav-link' : 'nav-link'} to = '/expenses'>Expenses</NavLink>
                <NavLink className = {({isActive}) => isActive ? 'active nav-link' : 'nav-link'} to = '/invoices'>Invoices</NavLink>
            </div>
            <Routes>
                <Route path = '/' element = {<LandingPage />} />
                <Route path='expenses' element = {<Expenses />} />
                <Route path='invoices' element = {<Invoices />} />
            </Routes> 
            <Outlet />
        </div>
    );
}

export default App;
