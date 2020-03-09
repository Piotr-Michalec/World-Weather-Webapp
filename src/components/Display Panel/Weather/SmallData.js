import React from 'react';

const pTypeStyle = {
    
    fontSize: '1rem',
    color: 'white',
    textDecoration: 'underline'
}

const pValueStyle = {

    fontSize: '2vh',
    color: 'white'
}
const SmallData = props =>{
    
    return(
        <div className = 'd-flex flex-column align-items-center justify-content-end '>
            <p style = {pTypeStyle}>{props.type}</p>
            <p style = {pValueStyle}>{props.value}</p>
        </div>
    );
};

export default SmallData;