import React from "react";
import { useParams } from "react-router-dom";
const UserScreen = (props) => {
  const { fname } = useParams();

  return <>
    
     <h1>Hello {fname??props.fname}</h1>

     { props.fname && props.lname && props.sonName && props.motherName ? ("Success"
                
                ) : ( 
                "Fail"
                )}

  </>;
};

export default UserScreen;
