import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", color:"black", background:"#eee", border:"none", marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>
);
