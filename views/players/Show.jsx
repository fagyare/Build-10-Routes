import React from 'react'

function Show(props) {

    return(

        <div style={{backgroundColor: 'purple', color: 'lightgray'}}>

        <h1 style={{backgroundColor: 'gold' , color: 'black' }}>L.A. Lakers Player</h1>
        <img src='/lbj.png' alt='lbjames'/>
      
        <h3> <strong>{props.player.name}</strong> </h3>
        <p> {props.player.nickie} </p>
        <p> #{props.player.num} </p>
        <p> <strong>{props.player.position}</strong> </p>
        <p> Bio: <strong>{props.player.bio}</strong> </p>
        <p> All Star:  <strong>{props.player.allStar ? 'Yes' : 'No'}</strong> </p>
        <p> Season: <strong> {props.player.season} </strong></p>




        </div>
    )
}

export default Show;
