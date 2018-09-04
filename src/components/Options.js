import React from 'react';
import Option from './option.js';
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

export default Options;