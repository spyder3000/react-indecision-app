import React from 'react'; 

export default class AddOption extends React.Component {
    state = {           // ES6 class properties here replaces this.state = { error: undefined }  in constructor (ch 58) 
        error: undefined
    }
    //constructor(props) {
    //    super(props); 
        // this.handleAddOption refers to handleAddOption defined in this class;  this.props.handleAddOption is passed from parent 
    //    this.handleAddOption = this.handleAddOption.bind(this);  
        // this.state = {
        //     error: undefined 
        // } 
    //}
    
    //handleAddOption(e) {
    handleAddOption = (e) => {     // defining as arrow function keeps 'this' bound to class;  do not need .bind(this) in constructor 
        e.preventDefault(); 
//        console.log(teaet);    // force Error to test debugging;  
        const option = e.target.elements.option.value.trim(); 
        const error = this.props.handleAddOption(option);   // calls parent function & passes data;  error only populated if error returned in parent fn   
        
        this.setState(() => ({ error } ))  // same as return {  error: error  }
        if (!error) {
            e.target.elements.option.value = ''; 
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>  {/* do not use onFormSubmit() or it will return a value & try to cram it in here */}
                    <input className="add-option__input" type='text' name='option'/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}