import React from 'react';   // all JSX is converted into React.createElement, so React here is needed, even for stateless components; 

// stateless functional component -- can convert the simple components to this (e.g. simple render components) 
const Header = (props) => (
    <div className='header'>
        <div className='container'>
            <h1 className='header__title'>{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>

    </div>
);  

/* special property that gives default values for props.title for <Header /> */
Header.defaultProps = {
    title: 'Indecision'
}

export default Header; 