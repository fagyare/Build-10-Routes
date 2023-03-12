import React from 'react'

function Show(props) {


    return (
        <div style={{backgroundColor: 'lightblue'}}>
           <h1>Show View</h1>  
            <p> The <strong>{props.family.name}</strong> {props.family.hobby ? 'has a hobby' : 'does not have any hobby'} </p>
            <p>{props.family.name}<strong>{props.family.age}</strong></p>
            <a href='/families'>Go back</a>
        </div>
    )
}
export default Show;
