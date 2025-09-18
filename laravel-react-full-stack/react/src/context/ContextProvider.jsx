import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "jhon"
    });
    // const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [token, _setToken] = useState(123);

    const setToken = (token) => {
        _setToken(token); //Armazena o token no state do token(o padrão criado acima)
        if (token){
            localStorage.setItem('ACCESS_TOKEN', token) //Armazenamos no local para que sempre que o usuario recarregar a pagina ele manter a informação que está com o token ainda
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

return(
    <StateContext.Provider value={{
        user,
        token,
        setUser,
        setToken
    }}>
        {children}
    </StateContext.Provider>
)
}

export const useStateContext = () => useContext(StateContext)
