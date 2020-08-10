// import React from 'react';
// import Modal from 'react-modal';

// const OptionModal = (props) => (
//   <Modal
//     isOpen={!!props.selectedOption}
//     onRequestClose={props.handleClearSelectedOption}
//     contentLabel="Selected Option"
//   >
//     <h3>Selected Option</h3>
//     {props.selectedOption && <p>{props.selectedOption}</p>}
//     <button onClick={props.handleClearSelectedOption}>Okay</button>
//   </Modal>
// );

// export default OptionModal;

import React from 'react'; 
import Modal from 'react-modal'; 

const OptionModal = (props) => (    // just a simple return;  this is shorthand for { return (<div> Some Text </div> )}
    <Modal
        isOpen={!!props.selectedOption}   // !! will convert undefined to false & actual text to true;  !! flips data twice; 
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"   // for users w/ Accessibility options enabled
        closeTimeoutMS = {200}      // # of seconds to wait before close;  useful with Transition css 
        className="modal"           // will allow us to use our created class to define css to this element
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption &&  <p className="modal__body">{props.selectedOption}</p>} 
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
); 

export default OptionModal; 