import React from 'react' 

function Index(props) {

    return(
        <div>
            <h1>The Lakers Player</h1> 
             <ul>
                {props.players.map((player, index) => // map through players model
                <li>
                    <a href={`/players/${index}`}><strong>{player.name}</strong></a></li>
                
                )}

            </ul>

        </div>

    )
}

export default Index;
