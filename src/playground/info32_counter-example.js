class Counter extends React.Component {
    constructor(props) {    // same as this.props referenced below
        super(props);       // super(props) needed if we're overriding the parent
        this.handleAddOne = this.handleAddOne.bind(this);  // allows us to run binding once;  
        this.handleMinusOne = this.handleMinusOne.bind(this);  // allows us to run binding once;  
        this.handleReset = this.handleReset.bind(this);  // allows us to run binding once;  
        this.state = {
            count: props.count, 
            name: 'Test' 
        }
    }

    handleAddOne() {
        //this.state.count++;       // ERROR - object changes, but does not re-render the component (so still shows as 0) 
        this.setState((prevState) => {  //prevState is object prior to updates 
            return {
                count: prevState.count + 1      // only include those values w/in state that you want to change
            }
        })
    }
    
    handleMinusOne() {
        this.setState((prevState) => {  //prevState is object prior to updates 
            return {
                count: prevState.count - 1
            }
        })
    }
    
    handleReset() {
        // Approach 1 -- passing a function w/ setState()
        this.setState(() => {        
            return { count: 0 }
        })
        // this.setState((prevState) => {      // React knows that prevState is out of date, so it updates w/ new value for prevState before running
        //     return { count: prevState.count + 1 }
        // })   

        // Approach 2 -- passing an object w/ setState()
        //this.setState({ count: 0 });    // ch 34 -- this.setState calls are async, so this isn't completed prior to 2nd this.setState, 
        //this.setState({ count: this.state.count + 1 });   // so overall effect is it ignores 1st this.setState & executes just the 2nd 
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

/* special property that gives default values for props.count for <Counter /> */
Counter.defaultProps = {
    count: 0
}

// ReactDOM.render(<Counter count={-10} />, document.getElementById('app'));  // param of count will override default value
ReactDOM.render(<Counter />, document.getElementById('app')); 

// let count = 0; 
// const someId='myidhere'
// const addOne = () => {
//     count++; 
//     console.log('addOne', count);  // JSX does not have built in data-binding;  
//     renderCounterApp(); // count value changes but not reflected in <h1> below, unless we run renderCounterApp()
// }
// const minusOne = () => {
//     count--; 
//     console.log('minusOne', count); 
//     renderCounterApp();
// }
// const reset = () => {
//     count=0; 
//     console.log('reset', count); 
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');   // element in index.html

// // this function simulates what React does (will see in later lessons) - re-renders the DOM w/ mods 
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={someId} className="button" onClick={addOne}>+1</button>   
//             <button onClick={minusOne}>-1</button>   
//             <button onClick={reset}>Reset</button>   
//         </div>
//     )
//     //console.log(templateTwo);   // prints an object which includes type & props.children array 
//     ReactDOM.render(templateTwo, appRoot);   // param 1 element is JSX to render, 2nd is DOM element where to render 
// }

// renderCounterApp(); 