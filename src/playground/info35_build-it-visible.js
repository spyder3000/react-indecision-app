class VisibilityToggle extends React.Component {
    constructor(props) {    // same as this.props referenced below
        super(props);       // super(props) needed if we're overriding the parent
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);  // allows us to run binding once;  
        this.state = {
            title: 'Visibility Toggle', 
            visibility: false 
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {  //prevState is object prior to updates 
            return {
                visibility: !prevState.visibility      // only include those values w/in state that you want to change
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {/*<p>{this.state.visibility ? "These are details you can see now" : null}</p>  */}
                {this.state.visibility && (
                    <p>These are details you can see now!!</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app')); 
