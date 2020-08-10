console.log('App.js is running!'); 

// JSX -- JavaScript XML (JSX is a JS syntax extension, provided by React;  makes working w/ language extensions easier)

const app = {         // just an object 
    title: 'Indecision App', 
    subtitle: 'Let the computer decide for you', 
    options: ['One', 'Two']
}

//var template = <h1>Indecision App</h1><p>This is some info</p>   // fails because not a single root;  
const template = (    // this is a JSX expression
    <div>
        <h1>{app.title}</h1>
        {(app.subtitle) && <p>{app.subtitle}</p> }
        <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options" }</p>
        <ol><li>Item One</li><li>Item two</li></ol>
    </div>   // succeeds because <div> makes this a single root; 
); 

/*const user = {
    name: 'Spyder', 
    age: '24', 
    location: 'Charlotte, NC'
}; 

function getLocation (location) {
    return (location) ? <p>Location: {location} </p> : null  // returns the html element;  null means no html will be added
}
// undefined for {getlocation()} will not create anything
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age > 18) && <p>Age: {user.age}</p> }
        {getLocation(user.location)}   
    </div>    
); */

const appRoot = document.getElementById('app');   // element in index.html

ReactDOM.render(template, appRoot);   // param 1 element is JSX to render, 2nd is DOM element where to render 