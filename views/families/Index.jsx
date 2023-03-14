import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>The Royal Family</h1>
            <ul>
                {console.log(props.families)}
                {props.families.map((family, index) => 
                    <li>
                        <a href={`/families/${index}`}><strong>{family.name}</strong></a>
                        
                        </li>
               

                    )}
            </ul>
        </div>
    )
}
export default Index;
