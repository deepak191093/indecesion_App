import React from 'react';
import ReactDOM from 'react-dom';

class IndecesionApp extends React.Component{

    constructor(props)
    {
        super(props);

        this.State ={

            Options : [10, 20 ,30]
        };
    }

    handlePick(e)
    {
        e.preventDefault();
        console.log('What Should I Do is Clicked');
    }
    handleRemoveAll(e)
    {
        e.preventDefault();
        console.log('Remove All is Clicked');
    }
    render()
    {
        return(
            <div>

                <Header  title = "Indecesion App"/>
                <Action  isDisabled = {this.State.Options.length > 0 ? false : true} onClickWhatShouldIDo = {this.handlePick.bind(this)} onClickRemoveAll = {this.handleRemoveAll.bind(this)}/>

            </div>

        );

    }


}

const Header = (props) => {

    return(
        <div>

            <h1 style={{textAlign:'center',backgroundColor:'MEDIUMVIOLETRED'}}>{props.title}</h1>
            
        </div>

    );


}
Header.defaultProps = {
    'title' : 'Indecesion App Practice'
};


const Action = (props) =>{

    return(
        <div style={{backgroundColor:'orange',textAlign:"center"}}>
        <form>
        <button   disabled={props.isDisabled} onClick = {props.onClickWhatShouldIDo}>What Should I Do ???</button>
        <button   disabled={props.isDisabled} onClick = {props.onClickRemoveAll}>Remove All Options</button>           
        </form>
        </div>


    );


} 



ReactDOM.render(<IndecesionApp />,document.getElementById('app'));