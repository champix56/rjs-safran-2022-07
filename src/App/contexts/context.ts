import * as React from 'react';
export const UserContext = React.createContext({id:-1});
export const UsersProvider = UserContext.Provider
export interface IUserContext{
    id:number
}