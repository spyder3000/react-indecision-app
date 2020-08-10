import React from 'react';
import AddOption from './AddOption'; 
import Header from './Header'; 
import Action from './Action'; 
import Options from './Options'; 
import OptionModal from './OptionModal'; 

export default class IndecisionApp extends React.Component {
    state = {   // ES6 class properties here replaces this.state = { options: [] }  in constructor (ch 58) 
        options: [], 
        selectedOption: undefined
    }; 
    // constructor(props) {
    //     super(props); 
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this); 
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this); 
    //     this.handlePick = this.handlePick.bind(this); 
    //     this.handleAddOption = this.handleAddOption.bind(this); 
    //     this.state = {
    //         //options: props.options   // will pull from default in IndecisionApp.defaultProps if not populated otherwise  
    //         options: []               // initialize to [] due to pulling data from localStorage in componentDidMount()
    //     }
    // }
    
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }; 

    // function to remove all options from array;  will pass this to be referenced as a prop var
    handleDeleteOptions = () =>  {
        this.setState(() => ({ options: [] }))   // parentheses needed to implicitly return an object;  simulates return {...} 
    };

    // function to delete a single option 
    handleDeleteOption = (optionToRemove) => {
        //this.setState callback has 2 params (state & props);  state here is named prevState to make more obvious this is object prior to updates 
        this.setState((prevState) => ({   // ({}) implicit return of object;  1st callback param prevState is object prior to updates
            options: prevState.options.filter((option) => option !== optionToRemove )
        }))
    };

    // handlePick -- pass down to <Action /> & setup onClick - bind;  randomly pick option & alert it 
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);        // Math.random returns number between 0 & 1
        const option = this.state.options[randomNum]; 
        this.setState(() => ({
            selectedOption: option  
         })); 
    };

    // handleAddOption -- will take option data from child function & add to parent 
    handleAddOption = (option) => {
        if (!option) {    // only runs if an empty string 
            return 'Enter valid value to add item'; 
        } else if (this.state.options.indexOf(option) > -1 ) {    // already in the array
            return 'This option already exists'
        } 
        this.setState((prevState) => ({ options: prevState.options.concat(option) }) )  // ({}) to implicitly return object
    };

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

    render() {
        const subtitle = 'Let the Computer Decide for You'; 

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick = {this.handlePick} />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption} 
                        />
                        <AddOption 
                            handleAddOption = {this.handleAddOption} 
                        /> 
                    </div>
                   
                </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}