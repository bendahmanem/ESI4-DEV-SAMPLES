import { createContext } from "react";

export const myContext = createContext({
    toto: '',
    setToto: () => {},
    aNumber: 42
})


export const MyContextProvider = (props) => {
    const setToto = (toto) => {
        alert(toto)
    }

    return (
        <myContext.Provider  value={{
            toto: 'toto',
            setToto: setToto,
            aNumber: 42
        }} >
            {props.children}
        </myContext.Provider>
    )
}

