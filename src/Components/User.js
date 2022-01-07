import React from 'react'
import { Link, useParams } from 'react-router-dom'

const User = () => {

    let {userId} = useParams()

    return (
        <div>
            <h2>User: {userId}</h2>
            <Link to = '/users'>Back to Users</Link>
        </div>
    )
}

export default User
