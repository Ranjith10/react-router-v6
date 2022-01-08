import React from 'react'
import { Link, useParams } from 'react-router-dom'

const User = ({ onRemoveUser }) => {

    let {userId} = useParams()

    return (
        <div>
            <h2>User: {userId}</h2>

            <button type="button" onClick={() => onRemoveUser(userId)}>
                Remove
            </button>

            <Link to = '/users'>Back to Users</Link>
        </div>
    )
}

export default User
