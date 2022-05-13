import React, {useState} from 'react'


const Home = ({username, messager}) => {
    return (
    
        <div className="container">
            {
                messager.map((data) =>(
                    <div key={Math.random()} className={`message ${ (username === data.username) ? "message_user" : "message_guest"}`}>
<h4>{data.username}:</h4><h3>{data.message}</h3>
</div>
                ))

            }
     </div>
    )
}

export default Home
