import React from "react";

export const UserDetails = ({ user, ...props }) => {
    return (
        <div>
            <h1>User details</h1>
            <img alt={user.name.first} src={user.picture.thumbnail} />
            <ul className="list-reset">
                <li>
                    {user.name.first} {user.name.last}
                </li>
                <li>{user.email}</li>
            </ul>
            <button
                className="bg-blue hover:bg-blue-dark mt-4 text-white font-bold py-2 px-4 rounded hover:bg-blue-light border-b-4 border-blue-dark"
                onClick={props.action}
            >
                Back
            </button>
        </div>
    );
};
