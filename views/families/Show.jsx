import React from 'react'

function Show(props) {

    

    return (
        <div style={{backgroundColor: 'lightblue'}}>
           <h1>Show View</h1>  
            <p><strong>{props.family.name}</strong> {props.family.hobby ? 'has a hobby' : 'does not have any hobby'} </p>
            <p>{props.family.name} is <strong>{props.family.age}</strong></p>
           <p> Nick Name: {props.family.nickie}</p>
            <a href='/families'>Go back</a>
        </div>
    )
}
export default Show;
