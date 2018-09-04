//IndecisionAppWithComponents

class IndecisonApp extends React.Component{
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
const Header = (props)=>{

        return(
            <div style={{backgroundColor : "MEDIUMVIOLETRED",textAlign:"center"}}>
                <h1 style={{color :"CORNSILK",fontFamily : "Monospace"}}>{props.title}</h1>
            </div>
        );
    }
Header.defaultProps = {
    title : "Indecision App"
};
const Action = (props) =>{

      return(
            <div style={{backgroundColor:"DEEPSKYBLUE",textAlign :"center"}}>
                    <button disabled={props.hasoptions} onClick={props.onclick}>What Should I Do??</button>
                    <button disabled={props.hasoptions} onClick={props.onclickRemove}>RemoveAll</button>

                </div>
            );


}
class Options extends React.Component{

    render()
    {
        return(
            <div style={{backgroundColor : 'MIDNIGHTBLUE',textAlign : "center"}}>
                <h2 style={{color : "CORNSILK"}}>Options Available</h2>
                {this.props.optionArray.map((x)=> <Option key = {x} data = {x} handleDeleteoption={this.props.handleDeleteoption}/>            )}
            </div>
            

        );
    }


}
const Option = (props) =>{


        return (
            <div>
            
                <li style={{color:"CORNSILK"}}>{props.data}<button onClick={()=>props.handleDeleteoption(props.data)}>ReMoVe</button></li>
                
            
            </div>
        );   
              
    
}

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

ReactDOM.render(<IndecisonApp />,document.getElementById('app'));

