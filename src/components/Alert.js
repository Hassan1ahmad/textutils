import React from "react";

export default function Alert(props) {
  return (
    <div style={{height: '50px' , position: 'sticky',
    top: '0',
    left: '0',
    right: '0', 
    }}>
    {props.alert && 
       <div className={`alert alert-fixed-top  alert-${props.alert.type}`} role="alert">
        {props.alert.message}
      </div>}
      </div>

   
    
  );
}
