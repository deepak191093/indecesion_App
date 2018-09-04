import React from 'react';

const Action = (props) =>{

    return(
          <div style={{backgroundColor:"DEEPSKYBLUE",textAlign :"center"}}>
                  <button disabled={props.hasoptions} onClick={props.onclick}>What Should I Do??</button>
                  <button disabled={props.hasoptions} onClick={props.onclickRemove}>RemoveAll</button>

              </div>
          );


}

export default Action;