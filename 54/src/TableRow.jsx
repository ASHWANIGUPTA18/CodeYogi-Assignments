import React from "react";
function TableRow(props) {
  return (
    <div className="p-2  ">
      {props.number} X {props.index} = {props.number * props.index}
    </div>
  );
}

export default TableRow;