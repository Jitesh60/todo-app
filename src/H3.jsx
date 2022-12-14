import React from 'react';

function H3(props){
  return(
       <h3 className="text-lg font-medium leading-6 text-gray-900 py-4">{props.children}</h3>
  );
}

export default H3;