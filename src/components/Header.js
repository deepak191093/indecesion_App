import React from 'react';
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

export {Header as default};