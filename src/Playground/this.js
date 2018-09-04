class abc{

    constructor()
    {
        const a = 'abc';
        this.fun = this.fun.bind(this);
    }
    
    fun()
    {
        console.log(this.a);
    }


}

const obj = new abc();

obj.fun();