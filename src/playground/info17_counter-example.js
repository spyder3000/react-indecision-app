let count = 0; 
const someId='myidhere'
const addOne = () => {
    count++; 
    console.log('addOne', count);  // JSX does not have built in data-binding;  
    renderCounterApp(); // count value changes but not reflected in <h1> below, unless we run renderCounterApp()
}
const minusOne = () => {
    count--; 
    console.log('minusOne', count); 
    renderCounterApp();
}
const reset = () => {
    count=0; 
    console.log('reset', count); 
    renderCounterApp();
}

const appRoot = document.getElementById('app');   // element in index.html

// this function simulates what React does (will see in later lessons) - re-renders the DOM w/ mods 
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id={someId} className="button" onClick={addOne}>+1</button>   
            <button onClick={minusOne}>-1</button>   
            <button onClick={reset}>Reset</button>   
        </div>
    )
    //console.log(templateTwo);   // prints an object which includes type & props.children array 
    ReactDOM.render(templateTwo, appRoot);   // param 1 element is JSX to render, 2nd is DOM element where to render 
}

renderCounterApp(); 