import React from 'react';

function Container(props){
  return(
    <div className="px-32 py-5">
      {props.children}
    </div>
  );
}

export default Container;