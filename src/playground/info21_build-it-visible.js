// JSX -- JavaScript XML (JSX is a JS syntax extension, provided by React;  makes working w/ language extensions easier)
const app = {         // just an object 
    title: 'Visibility Toggle', 
    visible: false
}

const toggleVisiblity = () => {
    app.visible = !app.visible; 
    render(); 
}

const appRoot = document.getElementById('app');   // element in index.html

// this function simulates what React does (will see in later lessons) - re-renders the DOM w/ mods 
const render = () => {
    //var template = <h1>Indecision App</h1><p>This is some info</p>   // fails because not a single root;  
    const template = (    // this is a JSX expression
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisiblity}>{(app.visible) ? "Hide Details" : "Show Details"}</button>
            {/*<p>{(app.visible) ? "These are details you can see now" : null}</p>  */}
            {app.visible && (
                <p>These are details you can see now!!</p>
            )}
        </div>   // succeeds because <div> makes this a single root; 
    ); 

    //console.log(template);   // prints an object which includes type & props.children array 
    ReactDOM.render(template, appRoot);   // param 1 element is JSX to render, 2nd is DOM element where to render 
}

render(); 


