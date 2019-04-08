import React from 'react';

export const UserList = ({ user, action, ...props }) => {
    return (
        <div>
            <ul className="list-reset">
                {user.map((user, index) => (
                    <li
                        onClick={action}
                        className="border-b-2 hover:bg-purple p-4 cursor-pointer"
                        key={user.cell}
                        id={index}
                    >
                        <div className="group flex items-center">
                            <img
                                className="w-10 h-10 rounded-full mr-4"
                                src={user.picture.thumbnail}
                                alt={user.name.last}
                            />
                            <div className="text-sm">
                                <p className="text-black capitalize leading-none group-hover:text-white">
                                    {user.name.first} {user.name.last}
                                </p>
                                <p className="text-grey-dark mt-1 group-hover:text-white">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
