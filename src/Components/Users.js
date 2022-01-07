import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Users = ({users}) => {
    return (
        <div style = {{display: 'flex', flexDirection: 'column'}}>
            <h2>Users</h2>
            <ul>
                {
                    users.map((user) => {
                        return (
                            <li>
                                <Link to = {`${user.id}`}>
                                    {user.fullName}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet />
        </div>
    )
}

export default Users
