import { useContext, useEffect, useState, createContext } from 'react'

const UserContext = createContext()
export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value='user context'>
            {children}
        </UserContext.Provider>
    )
}
// make sure use
export const useUserContext = () => {
    return useContext(UserContext)
}
