import React from "react";
import useUser from "../hooks/useUsers";

export const UserList = ({ user, action, ...props }) => {
    return (
        <div>
            <ul className="list-reset">
                {user.map((user, index) => (
                    <li
                        onClick={action}
                        className="border-b-2 hover:bg-blue-lighter p-4 cursor-pointer"
                        key={user.cell}
                        id={index}
                    >
                        <div className="flex items-center">
                            <img
                                className="w-10 h-10 rounded-full mr-4"
                                src={user.picture.thumbnail}
                                alt={user.name.last}
                            />
                            <div className="text-sm">
                                <p className="text-black capitalize leading-none">
                                    {user.name.first} {user.name.last}
                                </p>
                                <p className="text-grey-dark mt-1">
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
