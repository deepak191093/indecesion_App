const appRoot = document.getElementById('app');
const title = 'This is JSX Indecesion App';
let obj = {

    options : ['one','two','three']

};
const handlePick = ()=> 
{
    const random = Math.floor(Math.random() * obj.options.length);
    alert(`Things you can work on are ${obj.options[random]}`);
}
const handleRemoveAll = (e)=>
{
    e.preventDefault();
    console.log('handleRemoveAllClicked');
    obj.options = [];
    renderApp();
}
const handleSubmit = (e) =>
{
    
    e.preventDefault();
    const data = e.target.elements.data.value.trim();
    if(data == "")
    {
        alert('Enter a valid data');
        return ;
    }
    else if(obj.options.indexOf(data) > -1 )
    {
        alert('Input already Exits');
        return ;
    }
    e.target.elements.data.value = '';
    obj.options.push(data);
    renderApp();
}

function renderApp()
{

    const tempelate =
   (
        <div>
            <h1> {title} </h1>
            <button onClick={handlePick} disabled={obj.options.length>0  ? false : true}>What Should I Do ???</button>
            <button onClick={handleRemoveAll}>Remove All !!</button>
            <ol>
            {
                obj.options.map
                (
                    (option) => 
                    {
                    return <li key={option}>{option}</li>
                    }
                )
            }
            </ol>
            <form onSubmit={handleSubmit}>
                <input type='text' name='data'></input>
                <button>Enter Data</button>
            </form>
        </div>
    );    
    ReactDOM.render(tempelate , appRoot );
}

renderApp();

