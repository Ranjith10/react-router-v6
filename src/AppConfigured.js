import React from 'react'
import { useRoutes } from 'react-router-dom'

import Expenses from './Components/Expenses'
import Invoices from './Components/Invoices'
import LandingPage from './Components/LandingPage'
import Layout from './Components/Layout'
import User from './Components/User'
import Users from './Components/Users'

const AppConfigured = () => {

    let users = [
        { id: '1', fullName: 'Tobey Maguire' },
        { id: '2', fullName: 'Tom Harris' },
    ]

    let routes = [
        {
            path: "/",
            element: <Layout />,
            children: [
              { index: true, element: <LandingPage /> },
              {
                path: "/home",
                element: <LandingPage />,
              },
              {
                path: "/expenses",
                element: <Expenses />,
              },
              {
                path: "/invoices",
                element: <Invoices />,
              },
              {
                path: "/users",
                children: [
                    { index: true, element: <Users users={users} /> },
                    { path: "/users/:userId", element: <User /> }
                ]
              },
              { path: "*", element: <NoMatch /> }
            ]
          }
    ]

    let element = useRoutes(routes)

    return (
        <div>
            {element}
        </div>
    )
}

const NoMatch = () => {
    return (
        <div>
            Page not Found: 404
            Go to <a href='/home'>Home</a>
        </div>
    )
}

export default AppConfigured
