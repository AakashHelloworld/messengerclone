import React from 'react'
import firebase from "firebase"
import db from "./databas"

const Sumbit = ({input, setinput, messager, setmessager, username}) => {
const changingdata = (e)=>{
   setinput(e.target.value)
}
const submitdata = (e) =>{
    e.preventDefault();
    if(input){
    db.collection("messangers").add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })}
    if(input){
    setmessager([...messager, {message: input, username: username}])
}
    setinput("");
}

    return (
        <div className="submitstyle">
            <form onSubmit={submitdata}>
                <input value={input} type="text" placeholder="message" onChange={changingdata}></input>
                <button>click</button> 
            </form>           
        </div>
    )
}

export default Sumbit
