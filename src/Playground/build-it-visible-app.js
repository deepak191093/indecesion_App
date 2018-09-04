class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buttonVal : 'Show Deatils!!!!!',
            value : "",
            booldata : true
        };
    }
 changeData(){
    
    if(this.state.booldata == true)
    {
        console.log(`The data is ${this.state.booldata}`);
        this.setState( () =>{
            return{
            buttonVal : 'Hide Details',
            value : "Intial value in the App",
            booldata : false

            }
        })
    }
    else if(this.state.booldata == false)
    {
        console.log(`This data is ${this.state.booldata}`);
        this.setState(()=>{
            return{

                buttonVal : 'Show Deatils!!!!!',
                value : "",
                booldata : true    
            
            }
        })
    }

 }   
    render()
    {
        return(
            <div>
                <h1>This is Visibilty Toggle App with react Componet</h1>
                <button onClick={this.changeData.bind(this)}>{this.state.buttonVal}</button>        
                <h3>{this.state.value}</h3>
            </div>
        );
    }
}


ReactDOM.render(<Visibility/>,document.getElementById('app'));






// const appRoot=document.getElementById('app');
// const ChildRoot=document.createElement('h1');
// var value=undefined;
// var buttonValue="Show Details";
// let flag=1;
// const dataInsertion = ()=>{
//     if(flag==1){
// console.log('clicked');
// value="On Click Some Value is Inserted";
// buttonValue='Hide details';
// flag=2;
//     }
//     else if(flag == 2)
//     {
//         value= undefined; 
//         buttonValue="show Details"
//         flag = 1;
//         value = 'Show Details when clicked ';
//     }
// render();
// };

// ChildRoot.innerHTML='My name is khan';

// function render(){
// const someText = 'Hello This is Deepak Sharma software developer at Google';
// var tempelate = (
// <div>
// <h1>Visbility Toggle</h1>
// <button onClick={dataInsertion}>{buttonValue}</button>
// <h1>{value}</h1>

// </div>
// );
// ReactDOM.render(tempelate,appRoot);
// }

// render();