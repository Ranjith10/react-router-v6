import { Route, Routes } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import Expenses from './Components/Expenses';
import Invoices from './Components/Invoices';
import Layout from './Components/Layout';
import Users from './Components/Users';
import User from './Components/User';
import './App.css';

//* Use <Route children> rather than <Router component> and <Router render>
//* Replace all <Switch> elements to <Routes>
//* All <Route>s and <Link>s inside <Routes> are relative making the code leaner
//* Routes are chosen based on the best match rather than traversal order(like Switch)
//* <Routes> allow nesting of Routes in one place 

//* Index route provides a fallback component for a / route a user visits
//* it is like a default route when parent route matches but none of its child routes matches.

//* Nested routes -> /users/profile
//* Dynamic routes -> /users/{userId} - userId changes and UI is dynamically rendered based on userId

function App() {

    let users = [
        { id: '1', fullName: 'Tobey Maguire' },
        { id: '2', fullName: 'Tom Harris' },
    ]

    return (
        <div className="App">
            <Routes>
                <Route element = {<Layout />}>
                    <Route index element = {<LandingPage />} />
                    <Route path = 'home' element = {<LandingPage />} />
                    <Route path = 'expenses' element = {<Expenses />} />
                    <Route path = 'invoices' element = {<Invoices />} />
                    <Route path = 'users' element = {<Users users = {users}  />}>
                        <Route path = ':userId' element = {<User />} />
                    </Route>
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
