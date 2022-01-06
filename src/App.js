import { Link, Route, Routes } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import './App.css';
import Expenses from './Components/Expenses';

//*Use <Route children> rather than <Router component> and <Router render>
//*Replace all <Switch> elements to <Routes>
//*All <Route>s and <Link>s inside <Routes> are relative making the code leaner
//*Routes are chosen based on the best match rather than traversal order(like Switch)
//*<Routes> allow nesting of Routes in one place 

function App() {
    return (
        <div className="App">
            <div className='header'>
                <span className='app-title'>React Router v6</span>
                <Link to = '/'>Home</Link>
                <Link to = '/expenses'>Expenses</Link>
                <Link to = '/invoices'>Invoices</Link>
            </div>
            <Routes>
                <Route path = '/' exact element = {<LandingPage />} />
                <Route path='/expenses' element = {<Expenses />} /> 
            </Routes> 
        </div>
    );
}

export default App;
