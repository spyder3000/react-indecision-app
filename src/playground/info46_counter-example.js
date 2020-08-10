class Counter extends React.Component {
    constructor(props) {    // same as this.props referenced below
        super(props);       // super(props) needed if we're overriding the parent
        this.handleAddOne = this.handleAddOne.bind(this);  // allows us to run binding once;  
        this.handleMinusOne = this.handleMinusOne.bind(this);  // allows us to run binding once;  
        this.handleReset = this.handleReset.bind(this);  // allows us to run binding once;  
        this.state = {
            count: 0, 
            name: 'Test' 
        }
    }

    // lifecycle method -- for class-based Components only  
    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');  
            const count = parseInt(stringCount, 10);    // 2nd param is for base 10 
            console.log('jw', count); 
            if (!isNaN(count)) {   // if not a number, will just use default of 0 (implied else) 
                this.setState(() => ({ count })); 
            }
            //else this.setState(() => ({ count: 0 }))
        } catch (e) {
            // do nothing at all 
        }

    }

    // lifecycle method for after the state or props values changes;  2 params will help track differences
    componentDidUpdate(prevProps, prevState) {
        console.log('did update', prevState.count, this.state.count)
        if (prevState.count !== this.state.count) {     // ignore if count is the same (e.g. hit Reset when count already = 0) 
            localStorage.setItem('count', this.state.count); 
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
        this.setState(() => {        
            return { count: 0 }
        })
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

// ReactDOM.render(<Counter count={-10} />, document.getElementById('app'));  // param of count will override default value
ReactDOM.render(<Counter />, document.getElementById('app')); 
