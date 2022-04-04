import React from 'react';

// Dobrze przekazane props-y, dobry zalążek większego komponentu
function ButtonAction({btnText}) {
    return (
       <button>{btnText}</button>
    );
}

export default ButtonAction;