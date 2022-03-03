import React from "react";

export default function Escenes(props) {


  return (
    <div>
      {props.escenes.map((escena, index) =>
        <div className={props.selected == index ? 'selected' : 'escena'} key={index}>
          <h3>{escena.fruit}</h3>
        </div>
      )}
    </div>
  )
}