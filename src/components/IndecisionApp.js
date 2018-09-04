import React from 'react';
import AddOptions from './AddOption.js';
import Action from './Action.js';
import Header from './Header.js'
import Options from './Options.js';

export default class IndecisonApp extends React.Component{
    constructor(props)
    {

        super(props);
        this.state={

            options : props.options
        };
    }

componentDidMount()
{
try{
    
        const json = localStorage.getItem('options');
        const options =JSON.parse(json).options;
        if(options)
        {
        this.setState(()=> ({options : options}));
        console.log('On mount',options);
        }
    }
    catch(e)
    {
        // Do Nothing At All
    }
   
}
componentDidUpdate(prevProps  ,prevState)
{
        if(prevState.options.length !== this.state.length)
        {
            const json =JSON.stringify(this.state)
            localStorage.setItem('options' , json);
            
        }
    
}
componentWillUnmount()
{
    console.log(`Component will unmount`);
}

handlePick()
{
const random = Math.floor(Math.random() * this.state.options.length)
alert(this.state.options[random])

}
handleRemove()
{
    this.setState(()=>({ options : [] }));
}
handleAddData(data)
{
    if(this.state.options.lastIndexOf(data) > -1)
    {
        alert('Option already available');
    }
    else
    {
        this.setState((prevState)=>({options : prevState.options.concat(data)}))
              
    }

}
handleDeleteoption(data)
{
    console.log(data);
    this.setState( (prevState)=>({options :  prevState.options.filter((option)=>{
        if(data!==option)
        {
           return true;
        }
    })          
})
)
}
    render()
    {
        return(
            <div>
                <Header  />
                <Action  hasoptions={this.state.options.length > 0 ? false :true} onclick={this.handlePick.bind(this)} onclickRemove={this.handleRemove.bind(this)}/>
                <Options optionArray={this.state.options} handleDeleteoption={this.handleDeleteoption.bind(this)}/>
                <AddOptions addData={this.handleAddData.bind(this)}/>
                            </div>
        );
    }

}
IndecisonApp.defaultProps = {
    options: []
  };

