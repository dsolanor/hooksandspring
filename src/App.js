import React, { useState, useCallback } from "react";
import "./App.css";
import { UserList } from "./components/usersList";
import { UserDetails } from "./components/userDetails";
import { useTransition, animated } from "react-spring";
import useUsers from "./hooks/useUsers";
import useUser from "./hooks/useUser";

export default function App() {
    const [users, fetchUser] = useUsers();
    const [user, setUser] = useUser();
    const [index, set] = useState(0);
    const goPage = useCallback(() => set(state => (state + 1) % 2), []);
    const goUser = e => {
        const index = Number(e.currentTarget.id);
        setUser(users[index]);
        goPage();
    };

    const pages = [
        ({ style }) => (
            <animated.div
                className="simple-trans-main bg-gray-lighter"
                style={style}
            >
                <UserList user={users} action={goUser} />
            </animated.div>
        ),
        ({ style }) => (
            <animated.div
                className="simple-trans-main bg-purple-lighter"
                style={{ ...style, padding: "20px" }}
            >
                <UserDetails user={user} action={goPage} />
            </animated.div>
        )
    ];

    const transitions = useTransition(index, p => p, {
        from: {
            opacity: 1,
            transform: `translate3d(${index ? "100%" : "-100%"},0,0)`
        },
        enter: {
            opacity: 1,
            transform: "translate3d(0%,0,0)"
        },
        leave: {
            opacity: 0,
            transform: `translate3d(${index ? "-100%" : "100%"},0,0)`
        }
    });

    return (
        <React.Fragment>
            {transitions.map(({ item, props, key }) => {
                const Page = pages[item];
                return <Page key={key} style={{ ...props }} />;
            })}
        </React.Fragment>
    );
}
