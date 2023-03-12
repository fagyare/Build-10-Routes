import React from 'react'

function Show() {

    return(

        <div>

        <h1>L.A. Lakers Player</h1>
        <p> {props.player.name} </p>
        <p> {props.player.nickie} </p>
        <p> {props.player.num} </p>
        <p> {props.player.position} </p>
        <p> {props.player.bio} </p>
        <p> {props.player.allStar} </p>
        <p> {props.player.season} </p>



        </div>
    )
}

export default Show;
