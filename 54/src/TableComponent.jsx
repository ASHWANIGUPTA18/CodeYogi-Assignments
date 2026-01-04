import React from "react";
import TableRow from "./TableRow";

function Table() {
  const [num, setNum] = React.useState(2);
  
  function nextTable() {
    setNum(num + 1);
  }
  
  return (
   <div className='p-2'>
        <button onClick={nextTable} className='rounded-md px-4 py-1 bg-indigo-700 text-amber-50'>Next</button>
        <TableRow number={num} index={1} />
        <TableRow number={num} index={2} />
        <TableRow number={num} index={3} />
        <TableRow number={num} index={4} />
      </div>
  );
}

export default Table;