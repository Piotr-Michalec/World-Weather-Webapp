import React from 'react';

//displays data received as props from weather.js
const pTypeStyle = {
    fontSize: '1.5vh',
    color: 'white',
    textDecoration: 'underline',
    marginBottom: '3px'
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