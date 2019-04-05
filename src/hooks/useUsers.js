import { useState, useEffect } from "react";
export default function useUser() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const res = await fetch("https://randomuser.me/api?results=5&nat=es");
        const data = await res.json();
        setUsers(data.results);
    };
    useEffect(() => {
        fetchUsers();
    }, []);
    return [users, fetchUsers];
}
