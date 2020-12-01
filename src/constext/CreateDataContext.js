import React, { useReducer } from "react";

export default (reducer,actions,defaultValue)=>{
    const Context= React.createContext();

    const Provider=({children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        return(
            <Context.Provider value ={{state}}>
                {children}
                </Context.Provider>
        )
    }
}