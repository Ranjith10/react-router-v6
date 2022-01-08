import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const Users = ({users}) => {

    const [searchParams, setSearchParams] = useSearchParams()

    let searchTerm = searchParams.get('name') || ''

    let handleSearch = (event) => {
        let name = event.target.value
        if (name) {
            setSearchParams({ name: event.target.value, length: event.target.value.length })
        } else {
            setSearchParams({})
        }
    }

    return (
        <div style = {{display: 'flex', flexDirection: 'column'}}>
            <h2>Users</h2>

            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
            />

            <ul>
                {
                    users
                        .filter((user) =>
                            user.fullName.toLowerCase()
                            .includes(searchTerm.toLocaleLowerCase())
                        )
                        .map((user) => {
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
