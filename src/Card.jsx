import React from 'react'

function Card(props){
  return(
    <div>
     <div className="shadow p-4 rounded-md">
      {props.chilren}
     </div>
    </div>
  );
}

export default Card;