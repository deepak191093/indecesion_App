class Counter extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            counter : props.counter
        };
    }
    componentDidMount()
    {
        const num = localStorage.getItem('number');
        
        this.setState( () => ( {counter : parseInt(num, 10)} ) );
    }
    componentDidUpdate(prevProps ,prevState)
    {
        if(prevState.counter != this.state.counter)
        {
            console.log('this is component did update');    
            const num = this.state.counter;
            if(isNaN(num))
            {
                alert('it is not a number');
            }
            localStorage.setItem('number',num);
        }
    }
    handleAddOne()
    {
        
        this.setState((prevState)=>{
            return{
                counter : prevState.counter + 1
            };

        })
    }
    handleMinusOne()
    {
        this.setState((prevState)=>{

            return{
                counter : prevState.counter -1
            }


        })
    }
    handleReset()
    {
       this.setState(()=>{
            return{
                counter : 0
            }

       })
    }
    render(){        
        return(
            <div>
                    <h1>{this.props.titile}={this.state.counter}</h1>
                    <button onClick={this.handleAddOne.bind(this)}>+1</button>
                    <button onClick={this.handleMinusOne.bind(this)}>-1</button>
                    <button onClick={this.handleReset.bind(this)}>Reset</button>
            </div>
         );
    }
}

Counter.defaultProps={
    counter:10
};
ReactDOM.render(<Counter titile={'Counter App'} />,document.getElementById('app'))
