import { useState } from "react";
export default function useUsers() {
    const [user, setUser] = useState({});
    return [user, setUser];
}
