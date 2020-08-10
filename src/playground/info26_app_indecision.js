console.log('App.js is running!'); 

// JSX -- JavaScript XML (JSX is a JS syntax extension, provided by React;  makes working w/ language extensions easier)

const app = {         // just an object 
    title: 'Indecision App', 
    subtitle: 'Let the computer decide for you', 
    options: []   // e.g. ['One', 'Two']
}

const onFormSubmit = (e) => {   // e is event object
    console.log('submitted'); 
    e.preventDefault();   // stops full page refresh
    // e.target is the element the event started on (the form);  .elements contains all elements indexed by 'name=' reference in JSX
    const option = e.target.elements.option.value;  // gets data from Input Text field
    if (option) {    // '' will be false
        app.options.push(option); 
        e.target.elements.option.value = '';   // clear value from form input field
    }   
    renderOptionsArray(); 
}

// 'Remove All' button;  will clear app.options (e.g. set to empty array)
const onRemoveAll = () => {
    app.options = [];  
    renderOptionsArray(); 
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);        // Math.random returns number between 0 & 1
    const option = app.options[randomNum]; 
    alert(option)
//    console.log(randomNum); 
}

const appRoot = document.getElementById('app');   // element in index.html

//j const numbers = [55, 101, 1000]; 

// this function simulates what React does (will see in later lessons) - re-renders the DOM w/ mods 
const renderOptionsArray = () => {
    //var template = <h1>Indecision App</h1><p>This is some info</p>   // fails because not a single root;  
    const template = (    // this is a JSX expression
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p> }
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options" }</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            {/* {
                numbers.map((number) => {
                    return <p key={number}> {number * 2}</p>
                })
            } */}

            <ol>
                {  app.options.map((option) => {
                        return <li key={option}> {option}</li>
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>  {/* do not use onFormSubmit() or it will return a value & try to cram it in here */}
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
            
        </div>   // succeeds because <div> makes this a single root; 
    ); 

    //console.log(template);   // prints an object which includes type & props.children array 
    ReactDOM.render(template, appRoot);   // param 1 element is JSX to render, 2nd is DOM element where to render 
}

renderOptionsArray(); 


