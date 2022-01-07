import { Route, Routes } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import Expenses from './Components/Expenses';
import Invoices from './Components/Invoices';
import Layout from './Components/Layout';
import './App.css';

//*Use <Route children> rather than <Router component> and <Router render>
//*Replace all <Switch> elements to <Routes>
//*All <Route>s and <Link>s inside <Routes> are relative making the code leaner
//*Routes are chosen based on the best match rather than traversal order(like Switch)
//*<Routes> allow nesting of Routes in one place 

//* Index route provides a fallback component for a / route a user visits
//* it is like a default route when parent route matches but none of its child routes matches.

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element = {<Layout />}>
                    <Route index element = {<LandingPage />} />
                    <Route path = 'home' element = {<LandingPage />} />
                    <Route path = 'expenses' element = {<Expenses />} />
                    <Route path = 'invoices' element = {<Invoices />} />
                </Route>
                <Route path = '*' element = {<NoMatch />} />
            </Routes>
        </div>
    );
}

const NoMatch = () => {
    return (
        <div>
            Page not Found: 404
            Go to <a href='/home'>Home</a>
        </div>
    )
}

export default App;
