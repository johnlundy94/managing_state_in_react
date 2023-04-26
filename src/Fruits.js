import React from "react";

const FruitsContext = React.createContext();

function Fruits({children}) {
    const [fruits] = React.useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
        {fruitName: 'plum', id: 4},
    ]);

    return (
        <FruitsContext.Provider value={{fruits}}>
            {children}
        </FruitsContext.Provider>
    )
}

export const useFruitsContext = () => React.useContext(FruitsContext)

export default Fruits