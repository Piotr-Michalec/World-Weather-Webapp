import React from 'react';

const style = {
    
    fontSize: '2vw',
    color: 'white'
}

const SmallData = props =>{
    
    return(
        <div className = 'd-flex flex-column align-items-center justify-content-between' style = {style}>
            <p>{props.type}</p>
            <p>{props.value}</p>
        </div>
    );
};

export default SmallData;