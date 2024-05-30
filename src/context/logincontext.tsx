import React, { createContext, useContext ,Dispatch,SetStateAction} from "react";

// Define the type for the context value
interface LoginContextType {
  user:String;
  setuser: Dispatch<SetStateAction<string>>;
}

// Create a default context value
const defaultContextValue: LoginContextType = {
  user:'',
  setuser: ()=>{}
};

// Create the context
const LoginContext = createContext<LoginContextType>(defaultContextValue);


export { LoginContext };
