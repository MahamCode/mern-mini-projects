import React from "react";
import UserScreen from "./UserScreen"
import { useLocation } from "react-router-dom";

export const HomeScreen = () => {
  const location = useLocation();
  console.log(location.search)

   
  return <>
 
    Welcome to Home screen
    <UserScreen fname lname sonName/>
    
  </>;
};
