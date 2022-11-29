import React from 'react';

function Button(props){
  let themeClass = 'text-white font-medium bg-yellow-400 border-transparent hover:bg-yellow-600';
  
  let radiusClass = "rounded-md";
  
  if(props.theme === 'highlight'){
         radiusClass = "rounded-full";
  }
  
  if(props.theme === 'secondary'){
    themeClass = 'text-blue-gray-900 bg-white border-gray-300 hover:text-blue-gray-500'
  }

  return(
  <button onClick={props.onClick} className={"inline-flex justify-center items-center px-4 py-2 text-sm font-medium border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 " + themeClass + ' ' + radiusClass}>
          {props.icon && <span className="mr-2 text-lg -mt-1 inline-block">{props.icon}</span>}
    {props.children}
  </button>
    
  );
}

export default Button;