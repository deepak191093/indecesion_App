var appRoot=document.getElementById("app");
var app={
title :"Indecision Appa",
subtitle :"Put your life in the hands of a computer",
options:["One","Two"]
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.uname.value;
    if(value)
    {
        app.options.push(value);
        e.target.elements.uname.value = "";
        
        renderApp();

    }
}
function removeAll(){
app.options=[];
renderApp();
};
const randomNumber = ()=>{
const numbers = Math.floor(Math.random() * app.options.length);
alert(app.options[numbers]);


};
const numbers = [55, 101, 1000];
function renderApp(){
var templeteEx=(
<div>
    <h1>{app.title}</h1>
     <h1>{'This is Super jsx'}</h1>
    <p>{app.options.length>0 ? "Here are your options" : "No option Array is Empty"}</p>
    <ol>
       {
        app.options.map((x)=>
         {
            return <li key={x}>{x}</li>
        })


       } 
    </ol>
    <h1>The length of array {app.options.length}</h1>
    <form onSubmit = {onFormSubmit}>
    <h3>UserName<input type="text" name="uname" ></input></h3>
    <button>Click to submit</button>
    <button onClick={removeAll}>RemoveAll</button>
     
    </form>
    <button onClick={randomNumber} disabled={app.options.length>0?false:true}>Aj kya karega</button>
    
     

</div>
);

ReactDOM.render(templeteEx,appRoot);

};

renderApp();

 