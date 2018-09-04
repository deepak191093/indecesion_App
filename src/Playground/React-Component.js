class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state ={

                option : []

        };
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleDeleteOptions(){
        this.setState( () => {
            return{

                option:[]
            };

        })

    }

    handlePick(){
        const randomNumber = Math.floor(Math.random() * this.state.option.length);
        alert(this.state.option[randomNumber]);
   }

   handleAddOption(option)
   {
       if(this.state.option.indexOf(option)> -1)
       {
           alert('Data already Exits');
       }
       else{
       this.setState((prevState)=>{

            return{
                option : prevState.option.concat(option)

            }


       })
    }
   }
    render()
    {
       const title = "Indecision App!!";
       const subtitle = "Put your life in the hands of computer";
        
       return(<div>

                <Header title={title} subtitle={subtitle}/>
                <Action  hasOptions={this.state.option.length > 0?true:false} handlePick={this.handlePick.bind(this)}/>
                <Options option={this.state.option} handleDeleteOptions={this.handleDeleteOptions.bind(this)} />
                <AddOptions handelAddOption={this.handleAddOption}/>            
            </div>
        );
    }
}
class Header extends React.Component{
    render()
    {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}
class Action  extends React.Component{
    render()
    {
        return (

            <button onClick={this.props.handlePick} disabled = {!this.props.hasOptions}>What Should I Do ?</button>

        );
    }


}
class Options extends React.Component
{
    
    render()
    {
        return(

            <div>

                <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
                     
                {
                    this.props.option.map((val) => <Option key={val} optionText={val}/>  )
                }
                
            </div>

        );
    }
}
class Option extends React.Component
{
    render()
    {
        return(
            <div>
            option : {
                   this.props.optionText
                }
            </div>


        );
    }



}
class AddOptions extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handelAddOption = this.handelAddOption.bind(this);
    }
    handelAddOption(e)
    {
      e.preventDefault();
      const data =  e.target.elements.data.value.trim();
      if(data)
      {
        this.props.handelAddOption(data);
        e.target.elements.data.value = ' ';
      }
      else{
          alert('please enter data');
      }
    }
      render()
      {
        
          return(
            
              <div>
              <form onSubmit={this.handelAddOption}>
              <input type='text' name='data' placeholder='Enter option'/>
              <button>AddData!!</button>

              </form> 
              </div>

          );     
      }      

}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));