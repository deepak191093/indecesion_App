import React from 'react';

const Option = (props) =>{


    return (
        <div>
        
            <li style={{color:"CORNSILK"}}>{props.data}<button onClick={()=>props.handleDeleteoption(props.data)}>ReMoVe</button></li>
            
        
        </div>
    );   
          

}

export default Option;