import React from 'React';

class AddOptions extends React.Component{

    handleAddOption(e){
        e.preventDefault();
        const data = e.target.elements.input.value.trim();
        if(data)
        {
            this.props.addData(data , data);
            e.target.elements.input.value = '';
        }
        else{
            alert('Please enter data');
        }
    
    
    }
    
        render()
        {
            return(
                <div style={{backgroundColor:"cyan",textAlign:"center"}}>
                <form onSubmit={this.handleAddOption.bind(this)}>
                <input  type="text" name="input"/>
                <button>Add Option</button>
                </form>
                </div>
            );
        }
    
    }

export {AddOptions as default};
