class IndecisionApp extends React.Component {
    constructor(props) {
        super(props); 
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this); 
        this.handleDeleteOption = this.handleDeleteOption.bind(this); 
        this.handlePick = this.handlePick.bind(this); 
        this.handleAddOption = this.handleAddOption.bind(this); 
        this.state = {
            //options: props.options   // will pull from default in IndecisionApp.defaultProps if not populated otherwise  
            options: []               // initialize to [] due to pulling data from localStorage in componentDidMount()
        }
    }
    
    // lifecycle method -- for class-based Components only  
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');  
            const options = JSON.parse(json); 
            if (options) {
                this.setState(() => ({ options: options })); 
            }
        } catch (e) {
            // do nothing at all 
        }

    }

    // lifecycle method for after the state or props values changes;  2 params will help track differences
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options); 
            localStorage.setItem('options', json); 
            //console.log('saving data');  // componentDidUpdate fires after any change (whether updates state or props or not) 
        }        
    }

    // lifecycle method -- not as useful as other 2;  triggers when component is removed/closed
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    // function to remove all options from array;  will pass this to be referenced as a prop var
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))   // parentheses needed to implicitly return an object;  simulates return {...} 
    }

    // function to delete a single option 
    handleDeleteOption(optionToRemove) {
        //this.setState callback has 2 params (state & props);  state here is named prevState to make more obvious this is object prior to updates 
        this.setState((prevState) => ({   // ({}) implicit return of object;  1st callback param prevState is object prior to updates
            options: prevState.options.filter((option) => option !== optionToRemove )
        }))
    }

    // handlePick -- pass down to <Action /> & setup onClick - bind;  randomly pick option & alert it 
    handlePick() {
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);        // Math.random returns number between 0 & 1
            const option = this.state.options[randomNum]; 
            alert(option)
        })
    }

    // handleAddOption -- will take option data from child function & add to parent 
    handleAddOption(option) {
        if (!option) {    // only runs if an empty string 
            return 'Enter valid value to add item'; 
        } else if (this.state.options.indexOf(option) > -1 ) {    // already in the array
            return 'This option already exists'
        } 
        this.setState((prevState) => ({ options: prevState.options.concat(option) }) )  // ({}) to implicitly return object
    }

    render() {
        const subtitle = 'Let the Computer Decide for You'; 

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick = {this.handlePick} />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption} 
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption} 
                />
            </div>
        );
    }
}

// stateless functional component -- can convert the simple components to this (e.g. simple render components) 
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );  
}

/* special property that gives default values for props.title for <Header /> */
Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                    disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            {  
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}    
                    /> 
                ))
            }
        </div>
    );   
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            {/* <button onClick={props.handleDeleteOption}>Remove</button>  // Fail sends back event instead of option */} 
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);   // function explicitly sends back the optionText to parent function
            }}>Remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props); 
        // this.handleAddOption refers to handleAddOption defined in this class;  this.props.handleAddOption is passed from parent 
        this.handleAddOption = this.handleAddOption.bind(this);  
        this.state = {
            error: undefined 
        } 
    }
    
    handleAddOption(e) {
        e.preventDefault(); 
        const option = e.target.elements.option.value.trim(); 
        const error = this.props.handleAddOption(option);   // calls parent function & passes data;  error only populated if error returned in parent fn   
        
        this.setState(() => ({ error } ))  // same as return {  error: error  }
        if (!error) {
            e.target.elements.option.value = ''; 
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>  {/* do not use onFormSubmit() or it will return a value & try to cram it in here */}
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))   // 1st param is JSX to render;  2nd is location -- e.g. 'app' on index.html;  
//ReactDOM.render(<IndecisionApp options={['Movie', 'Dinner', 'Bowling']}/>, document.getElementById('app'))   // render w/ options array  
