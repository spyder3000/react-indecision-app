import React from 'react';   // all JSX is converted into React.createElement, so React here is needed, even for stateless components; 

const Option = (props) => (
    <div className="option">
        <p className="option__text"> {props.count}. {props.optionText} </p>
        {/* <button onClick={props.handleDeleteOption}>Remove</button>  // Fail sends back event instead of option */} 
        <button className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);   // function explicitly sends back the optionText to parent function
            }}
        >
            Remove
        </button>
    </div>
);

export default Option; 