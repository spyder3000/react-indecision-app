import React from 'react';   // all JSX is converted into React.createElement, so React here is needed, even for stateless components;  

const Action = (props) => (
    <div>
        <button className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What should I do?
        </button>
    </div>
);

// const Action = (props) => {
//     return (
//         <div>
//             <button onClick={props.handlePick}
//                     disabled={!props.hasOptions}>
//                 What should I do?
//             </button>
//         </div>
//     );
// }

export default Action; 