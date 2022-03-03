import React from "react";

export default function Buttons(props) {


  return (
    <div>
      <button onClick={() => props.onClick(
        props.selected < 3 ? props.selected + 1 : props.selected
      )}>NEXT</button>
      <button onClick={() => props.onClick(
        props.selected > 0 ? props.selected - 1 : props.selected
      )}
      >PREVIOUS</button>
    </div >
  )
}