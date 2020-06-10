import React from 'react';


const ToolWindow = (props) => {
    return(
        <div className='ui card'>
            <div className='content'>
                <div className='header'>{props.heading}</div>
            </div>
            <div className='content' style={{textAlign:"center", display:"inlineBlock"}}>
            <div className='ui small feed'>
                <div className='content'>
                    {props.children}
                </div>
            </div>
            </div>
        </div>
    )
}

export default ToolWindow;