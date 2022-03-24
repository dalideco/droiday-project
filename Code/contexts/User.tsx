import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


interface UserInterface {
    email?: string,
    number?: {
        contryCode: number,
        number: number
    },
    image?:any
    notified?: boolean,
}

interface ContextData {
    user: UserInterface|null,
    updateUser:(key:keyof UserInterface, value: any)=>void,
    getUser: () => Promise<UserInterface | null>,
    saveUser:() => Promise<void>
    removeUser: ()=>Promise<void>
}

const UserContext = createContext<ContextData>({
    user: null, 
    updateUser: (_key:keyof UserInterface, _value: any)=>{},
    getUser: ()=> new Promise(()=>{}),
    saveUser:() => new Promise(()=>{}),
    removeUser: ()=>new Promise(()=>{})
})

export function useUser(){
    return useContext(UserContext)
}

export function UserProvider({children}:{children: any}) {

    const [user, setUser] = useState<UserInterface|null>(null)

    const updateUser = (key: keyof UserInterface,value:any )=>{
        console.log(`udpating ${key} to:`, value)
        setUser(prev=>({
            ...prev,
            [key]:value
        }))
    }

    const getUser = async()=>{
        return AsyncStorage
            .getItem('user')
            .then(stringifiedUser=>{
                if(!stringifiedUser) return null;
                const user: UserInterface = JSON.parse(stringifiedUser)
                setUser(user) 
                return  user
            })
    }

    const saveUser = ()=>{
        return AsyncStorage
            .setItem('user', JSON.stringify(user));
    }

    const removeUser = ()=>{
        return AsyncStorage.removeItem('user');
    }

    const value: ContextData = {
        user:user,
        updateUser,
        getUser,
        saveUser,
        removeUser
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
