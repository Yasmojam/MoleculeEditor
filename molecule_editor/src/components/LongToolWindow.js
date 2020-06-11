import React from 'react';


const LongToolWindow = (props) => {
    return (
        <div className='ui card' style={{width:"640px", margin:"10px"}}>
            <div className='content' style={{padding: "12px"}}>
                <div className='header'>{props.heading}</div>
            </div>
            <div className='content' style={{textAlign: "center", display: "inlineBlock"}}>
                <div className='ui small feed'>
                    <div className='content'>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LongToolWindow;