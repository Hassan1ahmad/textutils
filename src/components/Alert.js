import React from "react";

export default function Alert(props) {
  return (
    props.alert && 
       <div className={`alert alert-fixed-top  alert-${props.alert.type}`} role="alert">
        {props.alert.message}
      </div>

   
    
  );
}
