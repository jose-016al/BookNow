import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const localUser = localStorage.getItem("usuario");
        if (localUser) {
            setUser(JSON.parse(localUser));
        }
    }, []);

    const handleUserChange = (newUser) => {
        setUser(newUser);
        localStorage.setItem("usuario", JSON.stringify(newUser));
    };

    const handleLogOut = () => {
        localStorage.removeItem("usuario");
        window.location.reload();
    }

    const data = {user, handleUserChange, handleLogOut};
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider };
export default AuthContext;


